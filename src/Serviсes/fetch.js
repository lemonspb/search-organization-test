
export default class Serviсes {

   getResource = async (item) => {
     const res = await fetch('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party',{
      headers:{
        "Content-Type": "application/json",
        "Authorization":"Token c3f4bb696927c55827407e32941739f14beb1c09"
      },
   
        
        method: 'POST',

        body: JSON.stringify({ query: `${item}` }),
     });
     return await res.json();
   };

}
