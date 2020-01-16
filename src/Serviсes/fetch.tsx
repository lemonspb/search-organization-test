
export default class Serviсes {

  getSuggest = async (query: string, type: string) => {
    const res = await fetch(`https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/${type}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Token c3f4bb696927c55827407e32941739f14beb1c09"
      },
      method: 'POST',
      body: JSON.stringify({ query: `${query}` }),
    });
    return await res.json();
  };

}
