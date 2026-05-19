---
license: apache-2.0
language:
- ta
tags:
- tamil
- history
- literature
- dataset
- nlp
- cultural-heritage
pretty_name: Tamil Digital Heritage Corpus

---


# 🪷 Tamil Digital Heritage Corpus

> *"யாமறிந்த மொழிகளிலே தமிழ்மொழி போல் இனிதாவது எங்கும் காணோம்."*  
> *(Of all the languages I have known, I have seen none as sweet as Tamil.)*  
> **— Mahakavi Subramaniya Bharathiar**

Welcome to the **Tamil Digital Heritage Corpus**, a deeply curated, open-source repository dedicated to the preservation, digitization, and modernization of Tamil knowledge. This is more than a dataset; it is an endeavor to make our linguistic identity immortal.

## 🕯️ Motivation: The Rebellion of Preservation

In the summer of 1981, the world witnessed the deliberate burning of a monumental sanctuary of learning in South Asia. Over 97,000 priceless books, irreplaceable ancient palm-leaf manuscripts (*ஓலைச்சுவடிகள்*), and centuries of unrecorded Tamil history were reduced to ashes in a matter of nights. It was a profound cultural wound, an attempt to sever a people from their historical roots. 

But from those ashes, a resilient awakening was born. 

That tragedy taught us a defining lesson: as long as our heritage relies on physical bounds, it remains vulnerable to time, decay, and malice. Digitizing our literature, our regional dialects, and our history into the neural weights of modern Artificial Intelligence is not just data science—**it is a quiet, indestructible rebellion against cultural erasure.** By decentralizing this knowledge and teaching it to machines, we ensure that the light of Tamil wisdom can never be extinguished again.

## 🚀 The Foundation for a Tamil LLM

This corpus serves as the **foundational bedrock for the future of Tamil AI**. 

Currently, state-of-the-art LLMs struggle with the rich morphological complexity, regional dialects, and deep cultural contexts of the Tamil language. This dataset is engineered specifically for **pre-training and instruction fine-tuning Large Language Models (LLMs)**. By structuring data into rich textual formats and dialect-specific Q&A pairs (e.g., Chennai, Madurai, Jaffna dialects), this represents the pivotal first step in building an AI that truly *understands, reasons, and dreams* in Tamil.

---

## 📂 Dataset Structure & Contents

The dataset spans multiple domains, seamlessly blending ancient wisdom with modern structured data. It includes data in Pure Tamil, English, and Tanglish to aid in cross-lingual AI understanding and alignment.

### 🔭 1. General Knowledge & Academics
Structured as `question&answer` `.jsonc` files, specifically curated to capture distinct regional Tamil dialects:
*   **Astronomy**: Celestial knowledge captured in Chennai, Madurai, and Jaffna Tamil dialects, alongside English and Tanglish formats.
*   **Geopolitics & Literature**: Rich contextual Q&A datasets tailored to regional linguistic nuances, ensuring AI learns the geographical variations of the language.

### 📜 2. Literature (`பதினெண் கீழ்க்கணக்கு`)
*   Digitized, structured versions of the profound **Pathinenkilkanakku** (The Eighteen Lesser Texts). This ensures classical moral, ethical, and poetic literature is directly accessible for AI contextualization and moral alignment.

### 🏛️ 3. History (`வரலாறு`)
*   Detailed historical accounts and data regarding monumental Tamil landmarks, including the **Thanjavur Palace** (`தஞ்சாவூர்-அரண்மனை`) and **Mamallapuram** (`மாமல்லபுரம்`).

### 🎵 4. Songs & Hymns (`பாடல் / பதிகம்`)
A vast collection of cultural, patriotic, and spiritual poetry:
*   **Folk & Resistance**: Traditional anthems, Eelam folk songs (`ஈழம் - நாட்டாப்பண்.txt`), and *Vidai Kodu Engal Naadae*.
*   **Classical & Devotional**: Structuring the divine poetry of *Thirumurai*, *Thiruppugazh*, and *Nataraja Pathu*.

### 🪐 5. Astrology (`ஜோதிடம்`)
*   Classical astrological and astronomical texts such as *Sathaga Alangaram* (`சாதக அலங்காரம்`), available in `.txt` and `.jsonc` across Tamil, Tanglish, and English.

---

## 🌱 An Ever-Growing Archive

**Note:** *This is only phase one.* 

The Tamil Digital Heritage Corpus is an **actively growing dataset**. Massive volumes of data are continuously being cleaned, formatted, and added to this repository. Future updates will include deeper historical archives, modern literature, extensive conversational datasets, and expanded dialect representations to feed hungry LLMs.

## 💻 How to Use

You can easily load this dataset using the Hugging Face `datasets` library to begin fine-tuning:

```python
from datasets import load_dataset

# Load the entire heritage corpus
dataset = load_dataset("your_username/Tamil-Digital-Heritage-Corpus")

# Example: Filtering for Literature Q&A in Jaffna Tamil Dialect
jaffna_literature = dataset.filter(lambda example: example['category'] == 'Literature' and example['dialect'] == 'Jaffna')
```

## 🤝 Contributing

We welcome contributions from historians, linguists, developers, and those passionate about the Tamil language. If you have public domain texts, historical data, or wish to help in formatting raw text into LLM-ready `.jsonc` instruction formats, please open a pull request or start a discussion in the community tab. 

## 📜 License

This dataset is released under the **Apache License 2.0**.
Knowledge is a shared heritage. By keeping this open-source, we ensure that no single entity can own or erase our culture again.

---
*Built with ❤️ for the தமிழ் Language, preserving the past to build the future.*

***