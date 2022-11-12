
const _apiBase = "https://api.json-generator.com/templates/ZM1r0eic3XEy/data";
const _apiKey = "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";



class JobService {
    static async getAllJobs() {
        const response = await fetch(`${_apiBase}?access_token=${_apiKey}`);
        return await response.json();
    }
}

export default JobService;