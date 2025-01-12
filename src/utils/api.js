export const savePrompt = async (data) => {
  const response = await fetch('http://localhost:5000/api/save_prompt', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to save prompt');
  }
  return response.json();
};

export const getPrompts = async () => {
  const response = await fetch('http://localhost:5000/api/get_prompts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch prompts');
  }
  return response.json();
};
