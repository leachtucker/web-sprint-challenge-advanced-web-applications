import { axiosAuth } from '../utils/axiosWithAuth';

export const deleteColor = (color) => {
    return axiosAuth().delete(`api/colors/${color.id}`)
};