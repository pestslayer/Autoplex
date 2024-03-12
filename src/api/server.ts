const token = '49a6642adf639242b33046b1c0fe07b6c9ad27bd7bee23f3'

export const server_calls = {
  get: async () => {
    const response = await fetch(`https://jonjonautoplex.onrender.com/api/inventory`,
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Access-Control_Allow-Origin': '*',
        'x-access-token': `${token}`
      }
    });

    if (!response.ok){
      throw new Error('Failed to fetch data from the server')
    }
    return await response.json()
  },


create: async (data: any = {}) => {
  console.log(data)
  const response = await fetch(`https://jonjonautoplex.onrender.com/api/inventory`,
  {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-access-token': `${token}`
      },
      body: JSON.stringify(data)
  })

  if (!response.ok) {
      throw new Error('Failed to create new data on the server')
  }

  return await response.json()
},

update: async (id: string, data:any = {}) => {
  const response = await fetch(`https://jonjonautoplex.onrender.com/api/inventory/${id}`,
  {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-access-token': `${token}`
      },
      body: JSON.stringify(data)

  })

  if (!response.ok) {
      throw new Error('Failed to update data on the server')
  }

  return await response.json()
},

delete: async (id: string) => {
  const response = await fetch(`https://jonjonautoplex.onrender.com/api/inventory/${id}`,
  {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-access-token': `${token}`
      },

  })

  if (!response.ok) {
      throw new Error('Failed to delete data from the server')
  }

  return;
  },
}