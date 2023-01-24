const axios = require("axios");

test("Service returns 'hola mundo'", async () => {
    try {
        const response = await axios.get(process.env.SERVICE_ENDPOINT, {});
        expect(response.data).toBe('hola mundo');
    } catch(e) {
        console.error(e);
        throw e;
    }
});