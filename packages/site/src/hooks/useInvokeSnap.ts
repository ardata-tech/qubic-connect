import { defaultSnapOrigin } from '../config';
import { useRequest } from './useRequest';

export type InvokeSnapParams = {
  method: string;
  params?: Record<string, unknown>;
};

export const useInvokeSnap = (snapId = defaultSnapOrigin): (params: InvokeSnapParams) => Promise<unknown> => {
  const request = useRequest();

  const invokeSnap = async ({ method, params }: InvokeSnapParams): Promise<unknown> =>
    request({
      method: 'wallet_invokeSnap',
      params: {
        snapId,
        request: params ? { method, params } : { method },
      },
    });

  return invokeSnap;
};
