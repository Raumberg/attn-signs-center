# Training algorithms

MyLLM library utilizes `trl` and `transformers` under the hood, so almost all trl/transformers classes are supported via yaml configuration.

## SFT (Supervised Fine-Tuning)
`--algo sft` — regular teacher-forcing; Trainer = `trl.SFTTrainer`  

## PPO (Proximal Policy Optimization)
`--algo ppo`, Trainer = `trl.PPOTrainer`

## GRPO (Group Relative Policy Optimization)
`--algo grpo`, Trainer = `trl.GRPOTrainer`

## Distillation
`--algo distill`, Trainer = `myllm.algorithms.distill.KDTrainer`
Teacher/student, teacher logits pass to DPO-like scheme.

## DFT (Dynamic Fine-Tuning)
`--algo dft`, Trainer = `myllm.algorithms.dft.DFTTrainer`
New training method that tries to comply with SFT and RL at the same time  
Параметры в `training.dft`: `rectification_strength`, `target_entropy`.
