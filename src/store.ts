import {
  createStore,
  action,
  StoreProvider,
  Action,
  createTypedHooks,
} from 'easy-peasy';

// The interface representing our entire store model
interface StoreModel {
  loaded: boolean;
  setLoaded: Action<StoreModel, boolean>;
}

const storeModel: StoreModel = {
  loaded: false,
  setLoaded: action((state, payload) => {
    state.loaded = payload;
  }),
};

const typedHooks = createTypedHooks<StoreModel>();

export const store = createStore(storeModel);
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

export { StoreProvider };
