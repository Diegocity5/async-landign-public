const API = "https://youtube-v31.p.rapidapi.com/search?channelId=UCJg9wBPyKMNA5sRDnvzmkdg&part=snippet%2Cid&order=date&maxResults=10";

//selecionando area de montaje
const content = null || document.querySelector('#content');

//Estas opciones van a depender del api que utilices
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": acjladsjflasdfjlsasaflsj,
    "X-RapidAPI-Host": rapidaapis
  }
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

// Expresión de función ejecutada inmediatamente no conocia esto (()=>{})()
(async () => {
  try {
    const videos = await fetchData(API);
    //iterando por cada uno de los items generar el codigo html cada de video
    const view = `${videos.items.map(
      (video) => `
    <div class="group relative">
        <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rouded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full" />
        </div>
        <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
            </h3>
        </div>
    </div>
    `
    ).slice(0,4).join('')}`;//solo 4 videos con slice y union con join
    content.innerHTML = view;
  } catch(error){
    console.log(error);//Nosotros como desarrolladores veremos la consola si hay errores
  }
})();