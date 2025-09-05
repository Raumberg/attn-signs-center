# Quickstart

In order to start with a project, all you need to do is simply clone the repository and install myllm as python library:

```bash
git clone https://github.com/Raumberg/myllm.git
cd myllm
make install       # installs dev+prod via UV, basically wrapped pip install -e .
myllm train \
    --config configs/test-sft.yaml \
    --algo sft \
    --engine accelerate
```

Main entrypoint and usecase for the library is the CLI tool `myllm` which provides you with instruments to train your LLM with a various algorithms **(SFT, GRPO, DFT and others)**, estimate the memory footprint of LLM training, merge your trained LoRA adapters and even inspect the model architecture! For more advanced features and explaination, please refer to `cli` section of the documentation.  

## Requirements

Please note that you have to have NVIDIA GPU hardware in order to launch any training.  
You also need to have `NVIDIA drivers` **(especially CUDA/CUDNN/CUBLAS and so on)**. You can verify if you are able to use CUDA via shell:
```bash
nvcc --version
```
This basically invokes an `NVIDIA compiler` and asks for its version. You can also verify whether the base drivers of your GPUs are working correctly using:
```bash
nvidia-smi
```
or:
```bash
sudo apt install nvtop
nvtop
```

## Building FA2
If you have `Ada/Hopper/Blackwell+` GPU arch, you are probably interested in using **Flash Attention 2/3** in your training session. In order to do so, please check your Torch version (needs to be 2.5+) and then install flash-attn using:  

```bash
uv pip install flash-attn --no-build-isolation
```

Or you can try to build FA2 or FA3 from source, but don't forget to pass GPU arch as a flag to CMAKE in order to build FA to your specific GPU.  

Still, the recommended way to use attn kernels is to download them from `kernel-community`. More on that in `config` section.