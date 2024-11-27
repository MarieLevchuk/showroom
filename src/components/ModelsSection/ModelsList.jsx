import { Box, LinearProgress, Pagination } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { carsLoad } from "../../redux/carsLoad.js";
import { useEffect, useMemo, useState } from "react";
import CarCard from "../CarCard/CarCard.jsx";
import filterEvents from "../../events/filterEvents";
import useSWR, { mutate } from "swr";

async function carsDataFetcher(args) {
    let url = `http://localhost:3000/cars?_page=${args.page}&_limit=${args.perpage}&_embed=specifications`;
    if(args.filter){
        url+='&isConfigurable='+args.filter.isConfigurable;
    }
    // console.log(args.filter);
    

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
    const [page, setPage] = useState(1);
    const [perpage, setPerpage] = useState(9);
    const [filterData, setFilterData] = useState(null);

   

    const { data, error, isLoading } = useSWR(
        {name: "cars", page:page, perpage:perpage, filter:filterData},
        carsDataFetcher
      );  
    
    if ( error ) {
      return <Box sx={{minHeight:'80vh'}}>Ошибка: </Box>;
    }

    useEffect(() => {
        filterEvents.addListener('filter', filter);
        return () => {
            filterEvents.removeListener('filter', filter);
        }
    }, []);

    function filter (filters) { 
        setFilterData(filters) 
        let b = {...filters, myfilter:'aaa'};
        let a = getQueryStringFromObject(b);
        console.log(a);
        let c = getObjectFromQueryString(a);
        console.log(c);
        
        
    }
    
    // const memoizedCars = useMemo(()=>{
    //     return data.map(model => <CarCard key={model.id} model={model}/> )
    // }, [data]);
    
    return (
        <>
            {
                (data?.last)&&
                <Box mt={4} sx={{display:'flex', justifyContent:"center"}}>
                    <Pagination count={data.last} page={page} onChange={(e, value) => setPage(value)} />
                </Box>
            }
            <Box mx='auto' sx={{height:20, minHeight:20, width:'90%'}}>
            {
                (isLoading)&&
                <Box sx={{width:'100%'}}>loading...<LinearProgress /></Box>
            }
            </Box>
            
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
        </>
    );
}