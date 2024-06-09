import CityData from "@/interfaces/city";
import {NextApiRequest, NextApiResponse} from 'next';
import cities from '@/lib/city.list.json';

const Cities = cities as CityData[];
const NUM_SUGGESTIONS = 5;

function searchCities(){

}

export default function handler(){
    
}