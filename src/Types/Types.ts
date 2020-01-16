export interface Suggestion {
    value: string,

    data: {
        inn: string,
        ogrn:string | null,
        kpp: string,
        hid: string,
        management:{
            post:string | null,
            name: string | null
        }
        address: {
            value: string,
            data: {
                city_kladr_id: string
                city_with_type: string
            }
        }
    }

}

export interface SavedOrganization {
    value:string,
    id:string,
    inn:string,
    kpp:string,
    ogrn:string,
    address:string,
    post:string,
    name:string,
}