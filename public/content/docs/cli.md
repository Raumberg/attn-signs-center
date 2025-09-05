# MyLLM CLI

## Examples

```bash
myllm train          --config path.yaml --algo sft --engine deepspeed   # starts training
myllm merge          --run_dir exps/run42                               # merges LoRA adapters
myllm eval           --config eval.yaml                                 # evals the model (beta)
myllm estimate       attn-signs/Qwen3-8b-ru                             # VRAM estimation for model training
myllm inspect        attn-signs/Qwen3-8b-ru --max-depth 4               # model architecture inspection
```

## myllm train
Invokes and manages the train loop with various algorithm types. Handles engine creation and config values.  
### Flags and options:
- config (--config) [str/path]: path to YAML configuration file with all parameters needed
- algo (--algo) [str]: algorithm type to be trained (sft/dft/distill/grpo/ppo)
- engine (--engine) [str]: engine type (accelerate/deepspeed/fsdp)
- backend-config (--backend-config) [str/path]: engine backend config (examples in configs/accelerate/...yaml)
- overrides (--overrides) [list[str]]: list of overrides to the training yaml config provided
- dump (--dump) [flag]: whether to dump all configuration files with trl/transformers classes in output directory
- resume_from (--resume-from): if provided, the training loop will start from the checkpoint in the path 

```bash
myllm train --config configs/test-sft.yaml --algo sft --backend-config configs/accelerate/stage3_config.yaml --dump
```

## myllm estimate
Estimates GPU memory footprint in order to see whether you can do the training or not.
### Flags and options:
- model_name (--model-name) [str/path]: what model do we want to estimate
- dtype (--dtype) [float32/float16/int8/int4]: dtype of the model's weights
- with_trust (--with-trust) [bool]: allows custom models with custom code execution

```bash
myllm estimate attn-signs/AS-GPT-5 --dtype float16
```

## myllm inspect
Take a peek into a model architecture, activation functions, what layer normalizations are used and so on!
### Flags and options:
- model_name (--model-name) [str/path]: what model do we want to peek into
- max_depth (--max_depth) [int, 0-4]: how detailed the inspection should be from 0 to 4
- with_trust (--with-trust) [bool]: allows custom models with custom code execution

## myllm merge
Merge your trained LoRA adapters into base weights and export the full model.
### Flags and options:
- source (--source) [str/path]: what LoRA adapters to use (path to adapters)
- output (--output) [str/path]: where to save merged model
- task (--task) [causal-lm/seq-clf]: what task type is model trained to? (seq classification or causal language modelling)
- dtype (--dtype) [bf16/f16/f32]: weights tensor float types
- keep_adapter (--keep-adapter) [bool]: whether to save original adapters to `output/original_adapter`
- overwrite (--overwrite) [bool]: whether to overwrite the output directory if it exists

```bash
myllm merge --source ~/models/as-lora --output ~/models/merged --dtype bf16
```

## myllm eval
Evaluate your trained model using out built-in metrics such as perplexity. For now in beta state