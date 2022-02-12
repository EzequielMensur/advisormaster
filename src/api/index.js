import axios from "axios";

const URL ='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const getPlacesData = async(sw,ne)=>{

         try{
             const {data : {data}} = await axios.get(URL,{
              params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
              },
              headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': '413c889d03msh0601d9733256121p12bc83jsnb0848fc527bb'
              }
             });
             return data
         } catch(error){
            console.log(error)
         }
}
