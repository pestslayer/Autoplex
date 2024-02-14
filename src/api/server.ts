const token = "49a6642adf639242b33046b1c0fe07b6c9ad27bd7bee23f3"

export const server_calls = {
    get: async () => {
        const response = await fetch(`http://127.0.0.1:5000/api/inventory`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': '${token}'
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
            
        }
        return await response.json
    },
}