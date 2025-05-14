# 🔒 ADB Locker

ADB Locker is a lightweight tool that allows you to **remotely lock or unlock** an Android device via **ADB (Android Debug Bridge)**. It's perfect for developers, automation scripts, and anyone who wants to control their Android device's lock state from a terminal or script.

---

## 🚀 Features

- 🔐 Lock the device screen instantly
- 🔓 Unlock the device with one command (with pre-set security disabled)
- 🧪 Simple and script-friendly usage
- 🖥️ Works on Windows, macOS, and Linux

---

## 📦 Installation

### ✅ Requirements

- Python 3.6+
- ADB installed and added to your system's PATH
- USB debugging enabled on your Android device

### 🧰 Install ADB

**macOS (Homebrew):**
```bash
brew install android-platform-tools
```

**Ubuntu/Debian:**
```bash
sudo apt install android-tools-adb
```

**Windows:**
- Download from the [official Android platform tools](https://developer.android.com/studio/releases/platform-tools)
- Extract and add to your PATH

---

### 🔧 Clone the Repo

```bash
git clone https://github.com/your-username/adb-locker.git
cd adb-locker
```

(Optional) Create a virtual environment:

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

---

## 🛠️ Usage

### 🔐 Lock the Device

```bash
adb shell input keyevent 26 && adb shell input keyevent 223
```

### 🔓 Unlock the Device

> ⚠️ Unlocking only works if no lock screen (PIN/pattern/password) is set.

```bash
adb shell input keyevent 82
```

---

## 🧪 Example Python Script

```python
import os

def lock_device():
    os.system("adb shell input keyevent 26 && adb shell input keyevent 223")

def unlock_device():
    os.system("adb shell input keyevent 82")

# Lock the device
lock_device()

# Unlock the device (only works if no lock screen security is set)
# unlock_device()
```

---

## ❗ Troubleshooting

- ❌ `adb: command not found`  
  → Make sure ADB is installed and added to your system PATH

- 🔌 Device not found?  
  → Run `adb devices` to ensure your device is connected and authorized

- 🔐 Unlocking doesn’t work?  
  → Ensure your device has no security lock set (PIN/pattern/password)

---

## 📄 License

MIT License. Do what you want, just don't blame me if you lock yourself out 😄

---

## 💡 Future Ideas

- Add support for PIN/pattern unlock via input
- Add GUI
- Add auto-detect for multiple devices

---

## 👨‍💻 Author

Hamood – [github.com/your-username](https://github.com/your-username)
