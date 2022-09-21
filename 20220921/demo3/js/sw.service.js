//export { movies }
export const movies = ['New Hope','Empire Strikes Back','Return of Jedy'];

export default class StarWarsService {
  search = async (filter = "") => {
    // XmlHttpRequest
    // GET https://swapi.dev/api/people/?search=
    // fetch(`https://swapi.dev/api/people/?search=${filter}`)
    //   .then((response) => {
    //     if (response.status !== 200) {
    //       console.log("http not 200");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);

    //     data.results.forEach((p) => {
    //       console.log(p.name);
    //     });
    //   });

    const response = await fetch(`https://swapi.dev/api/people/?search=${filter}`);
    const data = await response.json();
    console.log(data);
      data.results.forEach((p) => {
        console.log(p.name);
      });
  };
}
