# PEFT, LoRA, квантование, FP8

• Если `use_peft: true` — под капотом `peft.get_peft_model`.  
• 4-/8-бит: `bitsandbytes` + HF `bnb_linear`. Несовместимо с FP8.  
• FP8 (Hopper/ADA) — через собственный `myllm.quant.fp8` и DS Stage 2 FP8.  
• Смешивать LoRA + 4-bit — можно; LoRA + FP8 — нельзя (ограничение nv/kern).
