# LovesfireAI

LovesfireAI is the official voice and emotional‑tone layer of the BBnCC governance ecosystem.  
It represents the warmth, clarity, and accessibility of the system, expressed through the digital mascot **Bozafire** — a stylized, digitized avatar of the architect.

## Purpose

LovesfireAI serves as:
- The public‑facing representative of BBnCC  
- The greeter and conversational presence in live rooms  
- The tone‑shaping layer that wraps BBnCC logic in accessible language  
- The bridge between users and the governance engine  

## System Architecture
LovesfireAI operates as the expressive layer of the BBnCC ecosystem, transforming structured governance logic into accessible, human‑friendly communication.

### Architecture Overview

BBnCC (mind)
   ↓
LovesfireAI (voice)
   ↓
Bozafire (face)

- **BBnCC** provides the governance logic, structure, and decision framework.
- **LovesfireAI** interprets and communicates that logic with clarity and warmth.
- **Bozafire** serves as the visual mascot and greeter for all public interactions.

## Repository Structure

/core  
   index.js — main logic for LovesfireAI

/tone  
   applyTone.js — emotional‑tone and communication style layer

/bb-interface  
   wrapBBnCC.js — adapter that connects LovesfireAI to the BBnCC engine

/live  
   uiAdapter.js — interface for live room communication

/billing  
   tokenSystem.js — pay‑as‑you‑go usage model

/assets  
   bozafire.png — digitized mascot avatar

## Live Room Integration

LovesfireAI connects to a UI layer through a simple adapter, enabling:
- real‑time conversation  
- greeting and onboarding  
- question‑asking and answering  
- BBnCC‑aligned responses  
- token‑based access control  

## Status

This repository is in its initialization phase.  
Core modules will be added in structured phases to ensure clarity, modularity, and sponsor‑ready architecture.

