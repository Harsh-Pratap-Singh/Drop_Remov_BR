# Image Background Remover

This project provides a web-based solution to remove backgrounds from images using the **[rembg](https://github.com/danielgatis/rembg)** library.  

## Features
1. **Drag and Drop**: Easily upload images by dragging them into the upload area.  
2. **Preview Before Processing**: See the uploaded image preview instantly.  
3. **Download Output**: Processed images are available for immediate download in `.png` format with the background removed.  
4. **Deployment Ready**: Docker integration for seamless deployment.  

---

## How It Works

1. **Frontend**:  
   - A clean and responsive HTML/CSS interface.  
   - JavaScript to handle drag-and-drop file uploads and previews.  

2. **Backend**:  
   - Built with Flask to handle image uploads and processing.  
   - Uses the **rembg** library for background removal.  
   - Outputs the result as a PNG file.  

3. **Technology Stack**:  
   - **Frontend**: HTML, CSS, JavaScript  
   - **Backend**: Flask  
   - **Processing**: rembg (Python), Pillow (PIL)  
   - **Deployment**: Docker  

---

## Example  

### Before and After  

#### Example 1  
**Before**  
![original](https://github.com/Harsh-Pratap-Singh/Drop_Remov_BR/assets/114675475/d8a377e3-15a8-4a6b-b609-2f95411b5f42)  

**After**  
![rmbg](https://github.com/Harsh-Pratap-Singh/Drop_Remov_BR/assets/114675475/3d3af958-4192-4a45-9536-e8b9dbafc452)  

---

#### Example 2  
**Before**  
![original](https://github.com/Harsh-Pratap-Singh/Drop_Remov_BR/assets/114675475/f29b0f0e-851e-4ac0-b47c-010ea521e001)  

**After**  
![rmbg](https://github.com/Harsh-Pratap-Singh/Drop_Remov_BR/assets/114675475/d32c7d04-c72b-4001-b9d2-901543e84b61)  

---

## How to Run  

### Prerequisites  
- Python (>=3.8)  
- Docker (optional, for containerized deployment)  

### Local Setup  
1. Clone the repository:  
   ```bash
   git clone https://github.com/Harsh-Pratap-Singh/Drop_Remov_BR.git
   cd Drop_Remov_BR
    ```

1. **Clone the Repository**  

   Clone the repository to your local machine:  

   ```bash
   git clone https://github.com/Harsh-Pratap-Singh/Drop_Remov_BR.git
   cd Drop_Remov_BR
   ```  

2. **Install Dependencies**  

   Install the required Python packages from the `requirements.txt` file:  

   ```bash
   pip install -r requirements.txt
   ```  

3. **Start the Application Locally**  

   Run the Flask application locally:  

   ```bash
   python app.py
   ```  

4. **Access the Application**  

   Open your browser and navigate to:  

   ```text
   http://localhost:5100
   ```  

---

## Deploy Using Docker  

Follow these steps to deploy the application using Docker:  

1. **Build the Docker Image**  

   Build a Docker image for the application:  

   ```bash
   docker build -t image-bg-remover .
   ```  

2. **Run the Docker Container**  

   Start a container from the created image:  

   ```bash
   docker run -p 5100:5100 image-bg-remover
   ```  

3. **Access the Application**  

   Open your browser and navigate to:  

   ```text
   http://localhost:5100
   ```  

---

## Example  

Below are examples of input and output images processed by this application:  

### Before  

![original](https://github.com/Harsh-Pratap-Singh/Drop_Remov_BR/assets/114675475/d8a377e3-15a8-4a6b-b609-2f95411b5f42)  

### After  

![rmbg](https://github.com/Harsh-Pratap-Singh/Drop_Remov_BR/assets/114675475/3d3af958-4192-4a45-9536-e8b9dbafc452)  

---

## Acknowledgements  

This project uses the [**rembg**](https://github.com/danielgatis/rembg) library for background removal.  
```  

This complete README includes setup, run instructions, Docker deployment, and an example. Let me know if you want further edits!