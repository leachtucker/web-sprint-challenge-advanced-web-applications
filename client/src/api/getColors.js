import { axiosAuth } from '../utils/axiosWithAuth';

export const getColors = () => {
    return axiosAuth().get('/api/colors');
};