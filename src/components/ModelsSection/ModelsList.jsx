import { Box, LinearProgress, Pagination } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { carsLoad } from "../../redux/carsLoad.js";
import { useEffect, useMemo, useState } from "react";
import CarCard from "../CarCard/CarCard.jsx";
import filterEvents from "../../events/filterEvents";
import useSWR, { mutate } from "swr";
import { useSearchParams } from "react-router-dom";

async function carsDataFetcher(args) {
    // let url = `http://localhost:3000/cars?_page=${args.page}&_limit=${args.perpage}&_embed=specifications`;
    let url1 = 'http://localhost:3000/cars';
    // if(args.filter && args.filter.isConfigurable){
    //     url+='&isConfigurable='+args.filter.isConfigurable;
    // }
    // console.log(args.filter);
    const url = new URL(url1)
    const embed = {_embed:'specifications'};
    // let params = {...embed, ...args.pagination, ...args.filter}
    // console.log(params);
    
    // url.searchParams.append()
    // url.search = new URLSearchParams(params)
    let p = Object.fromEntries(args.searchParams.entries())
    url.search = new URLSearchParams(p)
    // console.log(url);

    const response = await fetch(url, {
            method: 'get',
            headers: {
              "Accept": "application/json",
            },
        });

    if(response.ok){
        const data = await response.json();
      
        let paginationData = {
            page: args.page,
            first: getLinkByRelFromLinkHeader(response.headers.get( "Link" ), 'first'),
            prev: getLinkByRelFromLinkHeader(response.headers.get( "Link" ), 'prev'),
            next: getLinkByRelFromLinkHeader(response.headers.get( "Link" ), 'next'),
            last: getLinkByRelFromLinkHeader(response.headers.get( "Link" ), 'last'),
            cars: data
        }
        // console.log(getLinkByRelFromLinkHeader(response.headers.get( "Link" ), 'first'));
        // console.log(paginationData);
        
        return paginationData;
    }else if ( !response.ok ){
      throw new Error("fetch error " + response.status);
    }
    
}

function getLinkByRelFromLinkHeader(header, rel){
    
    const link = header.match(new RegExp(`<([^>]+)>; rel="${rel}"`));
    if(link){
        const pageRegexp = /_page=(\d+)/
        const page = link[1].match(pageRegexp)
        if(page){
            return +page[1];
        }
    }

    return null;    
}

const getObjectFromQueryString = (search) => {
    const paramsEntries = new URLSearchParams(search).entries();
    return Object.fromEntries(paramsEntries);
};

const getQueryStringFromObject = (filters) => {
    return new URLSearchParams(filters).toString();
};



export default function ModelsList(){
    

    const [filterData, setFilterData] = useState({isConfigurable: false});
    const [paginationData, setPaginationData] = useState({_page:1, _limit:9});

    const [searchParams, setSearchParams] = useSearchParams({...paginationData, _embed:'specifications'});

//    const isc = search.get('isc')
//    console.log(searchParams);
   

    const { data, error, isLoading } = useSWR(
        // {name: "cars", page:page, perpage:perpage, filter:filterData},
        // {pagination:paginationData, filter:filterData},
        {searchParams:searchParams},
        carsDataFetcher
      );  
    
   

    useEffect(() => {
        filterEvents.addListener('filter', filter);
        return () => {
            filterEvents.removeListener('filter', filter);
        }
    }, []);

    useEffect(() => {
        
        // setSearchParams( prev => {
        //     prev.set('_page', paginationData._page);
        //     prev.set('_limit', paginationData._limit);
        //     return prev;
        // })
        setSearchParams( prev => {
            return new URLSearchParams({
                ...Object.fromEntries(prev.entries()),
                ...paginationData,
              });
        })
    }, [paginationData]);

    useEffect(() => {
        setSearchParams( prev => {
            if(filterData?.isConfigurable){
                prev.set('isConfigurable', filterData.isConfigurable);
            }else{
                prev.delete('isConfigurable');
            }
            return prev;
        })
    }, [filterData]);

    useEffect(() => {
        let searchParamsObj = Object.fromEntries(searchParams.entries());
        if(searchParamsObj?._page && searchParamsObj?._limit){
            setPaginationData(prev => {
                prev._page = searchParamsObj._page;
                prev._limit = searchParamsObj._limit;

                return prev;
            })
        }

        // if(searchParamsObj?.isConfigurable){
        //     setFilterData({isConfigurable:searchParamsObj.isConfigurable})
        // } else {
        //     setFilterData({isConfigurable:false})
        // }

    }, [searchParams]);

    function filter (filters) {
        setFilterData(filters) 
    }

    const handlePaginate = (e, value) =>{
        
        setPaginationData( prev => {
            let data = {...prev};
            data._page = +value;

            return data;
        })
    }

    if ( error ) {
        return <Box sx={{minHeight:'80vh'}}>Ошибка: </Box>;
      }
    
    // const memoizedCars = useMemo(()=>{
    //     return data.map(model => <CarCard key={model.id} model={model}/> )
    // }, [data]);
    // console.log(paginationData._page);
    
    
    return (
        <>
            {
                (data?.last)&&
                <Box my={2} sx={{display:'flex', justifyContent:"center"}}>
                    <Pagination count={data.last} page={+paginationData._page} onChange={handlePaginate} />
                </Box>
            }
            {
                (isLoading)?(
                    <Box mx='auto' sx={{height:20, minHeight:20, width:'90%'}}>
                        <Box sx={{width:'100%'}}>loading...<LinearProgress /></Box>
                    </Box>
                ) : (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent:'center',
                            flexWrap:'wrap',
                            gap: {xs:1, sm: 4}
                        }}
                    >
                        {/* { memoizedCars } */}
                       { data?.cars.map(model => <CarCard key={model.id} model={model}/>)}
                    </Box>
                )
            }
        </>
    );
}