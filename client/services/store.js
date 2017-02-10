import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        offers: [],
		map: null
    },
    mutations: {
        setOffers(state, offers) {
            state.offers = offers;
        },
        setOfferSelected(state, id) {
            var indexSelected = 0;
            var offerSelected;

            state.offers.forEach((o, i) => {
                if (o.id === id) {
                    o.selected = true;
                    offerSelected = o;
                    indexSelected = i;
                }
            });

            Vue.set(state.offers, indexSelected, offerSelected);
        },
        setOfferUnselected(state, id) {
            var indexSelected = 0;
            var offerSelected;

            state.offers.forEach((o, i) => {
                if (o.id === id) {
                    o.selected = false;
                    offerSelected = o;
                    indexSelected = i;
                }
            });

            Vue.set(state.offers, indexSelected, offerSelected);
        },
		setMap(state, map){
			state.map = map;
		}
    }
})

export default store;