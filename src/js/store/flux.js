const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],

			planets: [],

			favorites: [],

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			getCharacters: async () => {
				fetch('https://www.swapi.tech/api/people')
					.then((response) => response.json())
					.then((data) => {
						for (let item of data.results) {
							fetch(item.url) //para obtener el detalle de cada personaje uso la url
								.then((response) => response.json())
								.then((data) => {
									console.log(getStore()) //para depurar y obtener los datos actual de Store,
									console.log(data) // para registrar los datos de los personajes al detalle y poder imprimir en consola
									setStore({ characters: [...getStore().characters, data.result] }) 
								}).catch((err) => { console.log(err) })
						}

					})
			},

			getPlanets: async () => {
				fetch('https://www.swapi.tech/api/planets')
					.then((response) => response.json())
					.then((data) => {
						for (let item of data.results) {
							fetch(item.url)
								.then((response) => response.json())
								.then((data) => {
									console.log(getStore())
									console.log(data)
									setStore({ planets: [...getStore().planets, data.result] })
								}).catch((err) => { console.log(err) })
						}

					})
			},
			addFavorite: (item) => {
				console.log(item)

				const store = getStore();
				const searchItem = store.favorites.find( (search) => {
                     return search == item 
				})
				if (!searchItem) 
				setStore({ favorites: [...store.favorites, item] })
			},

			deleteFavorite: (index) => {

				const store = getStore();
				const newFavorites = store.favorites.filter((char) => {
					return char.uid !== index
				})
				setStore({ favorites: newFavorites })
			},


		}

	};
};

export default getState;
