# YAML Configuration

The main feature of the library - YAML configuration. You can configure almost everything regarding to your training via YAML!

## Examples

```yaml
model:
  name: attn-signs/AS-GPT-5                             # what model to use
  dtype: bf16                                           # what type of float to use
  attn_implementation: kernels-community/flash-attn3    # attn optimization kernels
  use_peft: true                                        # whether to use LoRA
  lora_r: 16                                            # what rank does LoRA matrixes need to be?
  lora_alpha: 32                                        # with what alpha do we want to affect to original weights?
  lora_target_modules: ["q_proj", "k_proj", "v_proj", "o_proj"] # what modules do we want to use for LoRA?

dataset:
  name: attn-signs/gromov-max-2     # what dataset to use
  from_disk: false                  # whether to load the model from disk
  split: train[:5%]                 # what split to use (with what size in %)
  test_size: 0.05                   # do we want to create a test split and if so, with what % of the original data
  max_length: 2048                  # maximum token len of completions in dataset
  system_prompt: "GO LEARN!!"       # system prompt for the model
  model_support_system_role: true   # whether the model supports SYSTEM role and system prompts
  offline: false                    # do we want to go offline and do not fetch new data in the run
  processor:  
    type: pair                      # what type of data processor do we want to use
    problem_field: problem          # processor-specific fields
    answer_field: solution          # processor-specific fields
  chat_template: "..."              # if model does not have a chat template or we wanna go with ours
  add_special_tokens: ["<some_token>", "</some_token>"] # do we want to add new tokens to the tokenizer
  pad_token: "<pad>"                # pad token that the model will use (if does not have one set up)

collator:                   
  type: completion          # what data collator do we want to use
  template: "<s>assistant"  # collator-specific fields
  ignore_index: -100        # collator-specific fields
  verbose: true             # whether to print collator hits or some other metadata

training:
  output_dir: my_run/attnsigns-lora # custom output folder if needed
  epochs: 1                         # how many epochs do we want to train for
  micro_batch_size: 2               # batch size per gpu, decomposes to per_device_train/eval_batch_size
  gradient_accumulation_steps: 8    # what grad accum do we want to use
  lr: 2.0e-5                        # learning rate
  gradient_checkpointing: true      # do we want to checkpoint grads to save some VRAM?
  save_strategy: steps              # what type of model saving do we want to use
  save_steps: 1000                  # in what rate do we want to save our model/adapters
  report_to: tensorboard            # reporting engine
  warmup_steps: 10                  # warmup out LR for n steps
  max_seq_len: 2048                 # for how many tokens our model will generate output max
  logging_steps: 1                  # how many steps before logging metrics and stdout
  
  sft:  # SFT-specific kwargs (may be different for other algos)
    use_liger_kernel: true          # whether to use Liger Kernel (fused XEntropy and RMSNorm)
    neftune_noise_alpha: 5          # arxiv: 2310.05914 / https://huggingface.co/papers/2310.05914
    activation_offloading: false    # whether to offload activations (doesn't work with kernels)
    # ...
    # and other parameters you can find in trl.SFTConfig class

wandb:
  enable: true                      # do we want to use WandB? NOTE: does not work in Russia, use tensorboard instead
  project: myllm-sft                # what will be the project name?
  name: as-lora                     # what will be the run's name?

engine:
  name: deepspeed                   # what engine do we want to use for training
  config: configs/deepspeed/stage_3.json

logging:
  level: info                                     # logging level
  suppress: ["transformers", "datasets", "torch"] # what modules do we want to suppress while logging
  warnings_ignore: ["use_cache=True", "TORCH_CUDA_ARCH_LIST"] # specific warnings to ignore
  disable_tqdm: true                              # disable default progress bar and use a custom cute one
```

## Model
• `name` — HF repo or local filepath to the model we want to train.  
• `dtype` — `bf16`/`fp16`/`fp32`/`int8`/`int4`. Dtype of the model's weights 
• `attn_implementation` — `flash_attention_2`, `sdpa` or `eager`. What attn kernels do we want to use
• PEFT-fields (`use_peft`, `lora_*`) PEFT-specific fields.  
• `cast_to_fp8` — Whether to cast to FP8 during training via NVIDIA Transformer Engine (WARNING! This feature is in beta version.)

## Training
• `micro_batch_size` - batch size per gpu (disintegrates to per_device_train_batch_size and per_device_eval_batch_size)
• `gradient_accumulation_steps` - deepspeed's gradient accumulation steps (https://www.hopsworks.ai/dictionary/gradient-accumulation)  
• `epochs`, `lr`, `weight_decay`, `warmup_steps` - train specific parametes, refer to PyTorch's docs
• `gradient_checkpointing`, `gradient_clipping` - whether to checkpoint grands and/or whether to clip them (to what value)
• `resume_from_checkpoint` - resuming from checkpoint in filepath  
• `grpo`, `ppo`, `sft`, `distill` - special sub-blocks that will tune algorithm-specific kwargs

## Dataset
• `name` — HF dataset or local JSON/Parquet
• `from_disk: true` — Whether to use `Dataset.load_from_disk` 
• `processor.type` — `default`, `history`, `grpo`, `pair`  
• `collator.type` — `standard`, `completion_only`
• `max_length`, `pad_token`, `chat_template`, `system_prompt` - tokenizer-specific kwargs
