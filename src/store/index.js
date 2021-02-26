import { createStore } from "vuex";

const store = createStore({
  state() {

    const memories = [
      {
        id: "m1",
        title: "Un viaje a las montañas",
        description: "Un viaje a las montañas de pirineo",
        image: "https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg",
      },
      {
        id: "m2",
        title: "Un viaje a las islas",
        description: "Un viaje a las islas de mallorca",
        image:
          "http://cdn.cnn.com/cnnnext/dam/assets/180219103122-zanzibar-and-its-islands---mnemba-a-view-from-the-sky-mnemba-island-lodge.jpg",
      },
      {
        id: "m3",
        title: "Un viaje a las playas",
        description: "Un viaje a las playas de cadaques",
        image:
          "https://pix10.agoda.net/hotelImages/301716/-1/fe9724d8fb4da3dd4590353bd771a276.jpg?s=1024x768",
      },
    ]

    const memory = []
    // return {
    //     memories: [
    //         {
    //             id: "m1",
    //             title: "Un viaje a las montañas",
    //             description: "Un viaje a las montañas de pirineo",
    //             image: "https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg",
    //         },
    //         {
    //             id: "m2",
    //             title: "Un viaje a las islas",
    //             description: "Un viaje a las islas de mallorca",
    //             image:
    //                 "http://cdn.cnn.com/cnnnext/dam/assets/180219103122-zanzibar-and-its-islands---mnemba-a-view-from-the-sky-mnemba-island-lodge.jpg",
    //         },
    //         {
    //             id: "m3",
    //             title: "Un viaje a las playas",
    //             description: "Un viaje a las playas de cadaques",
    //             image:
    //                 "https://pix10.agoda.net/hotelImages/301716/-1/fe9724d8fb4da3dd4590353bd771a276.jpg?s=1024x768",
    //         },
    //     ],
    // }
    return { memories, memory }
  },
  getters: {
    memories(state) {
      return state.memories
    },
    memory(state) {
      return state.memory
    },
    memoryFind(state) {
      return(memoryId) => {
        return state.memories.find(memory => memory.id === memoryId)
      }
    }
  },
  mutations: {
    setMemoryFiltered(state, payload) {
      state.memory = payload
    }
  },
  actions: {
    filtraMemoryId({ commit, state }, id) {
      const filtro = state.memories.filter(memory =>
        memory.id.includes(id))
      console.log(filtro);
      commit('setMemoryFiltered', filtro)
    }
  },
  modules: {
  }
})

export default store