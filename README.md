# Liberia OneMap — LrOneMap.com

**Demonstration Operational Prototype (DOP)**  
Liberia Geospatial Data Infrastructure (LGDI)  
Reference: `LGREF-ONEMAP-2026-001`

---

## 🚀 Deploy to GitHub Pages (10 minutes)

### Step 1 — Create GitHub repository
1. Go to [github.com](https://github.com) and sign in (or create a free account)
2. Click **New repository**
3. Name it: `LrOneMap`
4. Set to **Public**
5. Click **Create repository**

### Step 2 — Upload the site files
**Option A — Drag and drop (easiest):**
1. Unzip `LrOneMap_site.zip`
2. In your new GitHub repo, click **uploading an existing file**
3. Drag the entire contents of the unzipped folder into the browser
4. Click **Commit changes**

**Option B — GitHub Desktop:**
1. Clone the repo locally
2. Copy all files from `LrOneMap_site/` into the cloned folder
3. Commit and push

### Step 3 — Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Select branch: `main`, folder: `/ (root)`
4. Click **Save**
5. Wait ~60 seconds — your site will be live at:  
   `https://YOUR-USERNAME.github.io/LrOneMap/`

---

## 📁 File Structure

```
LrOneMap/
├── index.html              ← Homepage
├── css/
│   └── style.css           ← Shared stylesheet
├── js/
│   └── shared.js           ← Shared header/footer
├── pages/
│   ├── lgref.html          ← Geodetic monument viewer (27 monuments)
│   ├── lgmap.html          ← Bomi County interactive map
│   ├── lgdi.html           ← Data infrastructure / tech stack
│   ├── gita.html           ← GITA Center / University of Liberia
│   ├── about.html          ← About the portal
│   └── participate.html    ← Participate / contact
└── data/
    ├── boundary.geojson    ← Bomi PMO boundary
    ├── control.geojson     ← BC01–BC04 control points
    ├── roads.geojson       ← 2,449 road segments
    ├── waterline.geojson   ← 201 rivers & streams
    ├── water.geojson       ← 37 water bodies
    ├── landuse.geojson     ← 1,195 land use polygons
    └── bldg.geojson        ← 27,897 buildings (loads at zoom ≥13)
```

---

## 🗺 Map Layers (LGMAP Viewer)

| Layer | Features | Source |
|-------|----------|--------|
| PMO Boundary | 1 polygon | Surveyed + digitized |
| Land Use | 1,195 polygons | OSM / Bomi County |
| Water Bodies | 37 polygons | OSM |
| Rivers & Streams | 201 lines | OSM |
| Roads | 2,449 segments | OSM |
| Buildings | 27,897 polygons | OSM (loads zoom ≥13) |
| Control Points | 4 points (BC01–BC04) | BomiCo PMO Survey |

All layers in WGS84 geographic (EPSG:4326).

---

## 🌐 Custom Domain (Optional)

To use `LrOneMap.com` instead of the github.io URL:
1. Purchase domain at Namecheap / GoDaddy
2. Add a file named `CNAME` to the repo root containing: `LrOneMap.com`
3. In your domain registrar, add a CNAME DNS record pointing to `YOUR-USERNAME.github.io`
4. In GitHub Pages settings, enter your custom domain

---

## 📬 Contact

- Author/Developer: Matt Elious, ASPRS Emeritus — ME Geospatial Services LLC - matt.elious@gmail.com  
- Original Source Data: Lake Piso Solutions — liberiaidp.net  
- Classification: For Official Use Only  
