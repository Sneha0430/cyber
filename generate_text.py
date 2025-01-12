from transformers import GPT2LMHeadModel, GPT2Tokenizer

# Specify the local directory for the GPT-2 model files
local_model_path = r"C:\Users\gauta\.cache\huggingface\hub\models--gpt2\snapshots\607a30d783dfa663caf39e06633721c8d4cfcd7e"

# Load the tokenizer and model from the local path
tokenizer = GPT2Tokenizer.from_pretrained(local_model_path)
model = GPT2LMHeadModel.from_pretrained(local_model_path)

# Define your input prompt
prompt = "Once upon a time in a futuristic world,"

# Encode the input prompt into tokens
input_ids = tokenizer.encode(prompt, return_tensors="pt")

# Generate text
output = model.generate(
    input_ids,
    max_length=100,
    num_return_sequences=1,
    no_repeat_ngram_size=2,
    top_k=50,
    top_p=0.95,
    temperature=0.7,
    do_sample=True,
)

# Decode and print the output
generated_text = tokenizer.decode(output[0], skip_special_tokens=True)
print(generated_text)
