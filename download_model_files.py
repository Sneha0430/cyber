from huggingface_hub import hf_hub_download

# Replace 'gpt2' with the model ID you wish to download
model_id = "gpt2"

# List of files to download
files = ["config.json", "pytorch_model.bin", "tokenizer_config.json", "vocab.json"]

for file in files:
    file_path = hf_hub_download(repo_id=model_id, filename=file)
    print(f"Downloaded {file} to {file_path}")
