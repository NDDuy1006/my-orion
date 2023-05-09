import axiosClient from "../axiosClient";


class RequesterAxios {

    getAll(data?: any){
        return axiosClient({
            url: '/api/layDanhSachSanPham',
            method: 'GET',
            data: data
        });
    };

};


const requesterAxios = new RequesterAxios();

export default requesterAxios;