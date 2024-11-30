import { Box, LinearProgress, Pagination } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import CarCard from "../CarCard/CarCard.jsx";
import filterEvents from "../../events/filterEvents";
import useSWR, { mutate } from "swr";
import { useParams, useSearchParams } from "react-router-dom";

async function carsDataFetcher(args) {
    let urlbase = 'http://localhost:3000/cars';

    const url = new URL(urlbase)
    const embed = {_embed:'specifications'};

    let searchParams = Object.fromEntries(args.searchParams?.entries())
    
    let params ={...embed, ...searchParams};
    url.search = new URLSearchParams(params)

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
        
        return paginationData;
    }else if ( !response.ok ){
      throw new Error("fetch error " + response.status);
    }
    
}

function getLinkByRelFromLinkHeader(header, rel){
    if(!header){
        return null;
    }
    
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

export default function ModelsList(){
    

    const [filterData, setFilterData] = useState(null);
    const [paginationData, setPaginationData] = useState({_page:1, _limit:9});

    const [searchParams, setSearchParams] = useSearchParams({...paginationData});   

    const { data, error, isLoading } = useSWR(
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
        setSearchParams( 
            new URLSearchParams({
                ...filterData,
                ...paginationData,
            })
        )
    }, [filterData, paginationData]);

    useEffect(() => {
        let searchParamsObj = Object.fromEntries(searchParams.entries());
        if(searchParamsObj?._page && searchParamsObj?._limit){
            setPaginationData(prev => {
                prev._page = searchParamsObj._page;
                prev._limit = searchParamsObj._limit;

                return prev;
            })
        }

        if(filterData && searchParamsObj){

            if(filterData.transmission !== searchParamsObj.transmission ||
                filterData.persons != searchParamsObj.persons||
                filterData.isConfigurable !== searchParamsObj.isConfigurable)
            {
                    filterEvents.emit('changedFilters', searchParamsObj);
            }
        }

        
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
        return <Box sx={{minHeight:'80vh'}}>Ошибка</Box>;
    }
        
    
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
                ) : (data?.cars.length > 0) ? (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent:'center',
                            flexWrap:'wrap',
                            gap: {xs:1, sm: 4}
                        }}
                    >
                       { data?.cars.map(model => <CarCard key={model.id} model={model}/>)}
                    </Box>
                ) : (
                    <Box> no data </Box>
                )
            }
        </>
    );
}