import { axiosAuth } from '../utils/axiosWithAuth';

export const putColor = (color) => {
    return axiosAuth().put(`/api/colors/${color.id}`, {...color});
};