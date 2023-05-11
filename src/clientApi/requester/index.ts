import { GenericAbortSignal } from "axios";
import axiosClient from "../axiosClient";


class RequesterAxios {

    userLogin(data: userLoginType) {
        return axiosClient({
            url: '/dangNhap',
            method: "POST",
            data
        })
    }

    getAll(data?: any, signal?: GenericAbortSignal ){
        return axiosClient({
            url: '/layDanhSachSanPham',
            method: 'GET',
            data: data,
            signal
        });
    };

};


const requesterAxios = new RequesterAxios();

export default requesterAxios;