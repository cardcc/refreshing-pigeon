


class Api {

    constructor(method, url, apiKey, apiHost) {

        this.responseInfo = null;

        this.options = {
            method: method,
            url: url,
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': apiHost
            }

        };

    }


    async getInfo() {

        if ( !this.responseInfo ) {

            this.responseInfo = await this.executeRequest();

        }

        return this.responseInfo;


    }

    executeRequest() {

        return axios.request(this.options).then(function (response) {

            return response.data.response;

        }).catch(function (error) {

            console.error(error);
        });

    }




};
