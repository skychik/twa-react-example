import {createContext, useContext} from 'react';

export type RouterContext = {}

const RouterContext = createContext<RouterContext>({});

export const useRouter = useContext<RouterContext>(RouterContext)

export const RouterConsumer = RouterContext.Consumer;
export const RouterProvider = RouterContext.Provider;
