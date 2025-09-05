# Project structure

```
myllm/
  algorithms/   # SFT, PPO, Distill, GRPO, DFT trainers
  engines/      # DeepSpeed, Accelerate, FSDP
  data/         # DataModule, collators, processors
  config/       # Pydantic-schemes + YAML-parser
  callbacks/    # WANDB, progress bar, GPU-monitors and so on
  models/       # Smart wrappers around HF model/tokenizer
  quant/        # FP8, BnB 4/8-bit
  rewards/      # Special smart RLVR rewards which can be plugged into the config
  metrics/      # Score your trained LLM!
  kerr/         # Custom CUDA kernels
  cli.py        # Typer-CLI «myllm»
```

In the upper file tree, you will find *configs* directory which provides an overview of different configs you can use to start your training. To experiment, just plug your model and a desired dataset, change some parameters and try to pass it to CLI. Also cthere are DeepSpeed and Accelerate configs which you may have to rewrite according to your hardware needs.  
Other probably interesting section is *.kubernetes* directory which provides you a patched **Kubeflow Trainer**, necessary manifests and guidelines to start your multi-node training aiming for large-scale.
You also may want to use this library in *docker*, in order to do so, we have *local-dockerfile* which provides you with a libllm image which you can deploy to a specific node and start training in docker.