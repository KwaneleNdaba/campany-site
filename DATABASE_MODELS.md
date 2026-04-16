# Database Models & API Documentation

## Models Overview

All models include the following common fields:
- `order` (Number) - For sorting items
- `isActive` (Boolean) - Controls visibility on the website
- `createdAt` (Date) - Automatic timestamp
- `updatedAt` (Date) - Automatic timestamp

---

## 1. Hero Carousel Model

**File:** `models/HeroCarousel.ts`

### Fields
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| title | String | Yes | Project title |
| status | Enum | Yes | TRADING, DEVELOPMENT, COMPLETED, COMING SOON |
| location | String | Yes | City/Area location |
| description | String | Yes | Project description |
| image | String | Yes | Image URL (from UploadThing or external) |
| order | Number | No | Display order (default: 0) |
| isActive | Boolean | No | Visibility toggle (default: true) |

### API Endpoints
- **GET** `/api/hero-carousel` - Get all active carousel items
- **POST** `/api/hero-carousel` - Create new carousel item
- **PUT** `/api/hero-carousel/[id]` - Update carousel item by ID
- **DELETE** `/api/hero-carousel/[id]` - Delete carousel item by ID

### Admin Page
`app/admin/home/hero/page.tsx` - Fully integrated with database and UploadThing

---

## 2. Category Model

**File:** `models/Category.ts`

### Fields
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| title | String | Yes | Category name |
| image | String | Yes | Category image URL |
| link | String | Yes | Navigation link |
| order | Number | No | Display order (default: 0) |
| isActive | Boolean | No | Visibility toggle (default: true) |

### API Endpoints
- **GET** `/api/categories` - Get all active categories (sorted by order)
- **POST** `/api/categories` - Create new category
- **PUT** `/api/categories/[id]` - Update category by ID
- **DELETE** `/api/categories/[id]` - Delete category by ID

### Admin Page
`app/admin/home/categories/page.tsx` - ✅ **Fully integrated with database and UploadThing**

---

## 3. Project Model

**File:** `models/Project.ts`

### Fields
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| title | String | Yes | Project name |
| type | Enum | Yes | Commercial, Retail, Industrial, Residential, Mixed-Use |
| location | String | Yes | Project location |
| status | Enum | No | Completed, Under Construction, Coming Soon, Planning |
| image | String | Yes | Main project image |
| description | String | No | Project description |
| area | String | No | Total area |
| units | String | No | Number of units |
| completion | String | No | Completion date |
| architect | String | No | Architect name |
| features | [String] | No | Array of features |
| amenities | [String] | No | Array of amenities |
| gallery | [String] | No | Array of gallery image URLs |
| order | Number | No | Display order (default: 0) |
| isActive | Boolean | No | Visibility toggle (default: true) |

### API Endpoints
**TODO** - Need to create API structure

### Admin Page
`app/admin/home/projects/page.tsx` - Needs database integration

---

## 4. Service Model

**File:** `models/Service.ts`

### Fields
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| title | String | Yes | Service name |
| description | String | Yes | Service description |
| icon | String | No | Icon name (default: Building2) |
| image | String | Yes | Service image URL |
| order | Number | No | Display order (default: 0) |
| isActive | Boolean | No | Visibility toggle (default: true) |

### API Endpoints
**TODO** - Need to create API structure

### Admin Page
`app/admin/services/list/page.tsx` - Needs database integration

---

## 5. Team Member Model

**File:** `models/TeamMember.ts`

### Fields
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | String | Yes | Member name |
| role | String | Yes | Job title/role |
| image | String | Yes | Profile photo URL |
| bio | String | No | Biography |
| email | String | No | Email address |
| linkedIn | String | No | LinkedIn profile URL |
| order | Number | No | Display order (default: 0) |
| isActive | Boolean | No | Visibility toggle (default: true) |

### API Endpoints
**TODO** - Need to create API structure

### Admin Page
`app/admin/about/team/page.tsx` - Needs database integration

---

---

## 7. About Content Model

**File:** `models/AboutContent.ts`

### Fields
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| title | String | Yes | Main heading |
| subtitle | String | Yes | Secondary heading |
| description | String | Yes | Detailed description |
| image | String | Yes | About section image URL |
| features | [String] | No | Array of feature points |
| isActive | Boolean | No | Visibility toggle (default: true) |

### API Endpoints
- **GET** `/api/about-content` - Get active about content
- **POST** `/api/about-content` - Create new about content
- **PUT** `/api/about-content/[id]` - Update about content by ID
- **DELETE** `/api/about-content/[id]` - Delete about content by ID

### Admin Page
`app/admin/home/about/page.tsx` - ✅ **Fully integrated with database and UploadThing**

---

## 8. Statistic Model

**File:** `models/Statistic.ts`

### Fields
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| value | Number | Yes | Numeric value (e.g., 30) |
| label | String | Yes | Description (e.g., "Years Experience") |
| suffix | String | No | Suffix to append (e.g., "+", "B+") |
| order | Number | No | Display order (default: 0) |
| isActive | Boolean | No | Visibility toggle (default: true) |

### API Endpoints
- **GET** `/api/statistics` - Get all active statistics (sorted by order)
- **POST** `/api/statistics` - Create new statistic
- **PUT** `/api/statistics/[id]` - Update statistic by ID
- **DELETE** `/api/statistics/[id]` - Delete statistic by ID

### Admin Page
`app/admin/home/about/page.tsx` - ✅ **Fully integrated (managed within About page)**

---

## 6. User Model

**File:** `models/User.ts`

### Fields
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| email | String | Yes | Unique email address |
| password | String | Yes | Hashed password (bcrypt) |
| name | String | Yes | User's full name |
| role | Enum | No | admin or user (default: user) |

### API Endpoints
- **POST** `/api/auth/login` - User login
- **POST** `/api/auth/register` - User registration
- **POST** `/api/auth/logout` - User logout

---

## UploadThing Configuration

**File:** `app/api/uploadthing/core.ts`

### Endpoints
1. **imageUploader** - Single image upload (max 4MB)
2. **multiImageUploader** - Multiple images upload (max 10 files, 4MB each)

### Environment Variables
```env
UPLOADTHING_SECRET=sk_live_...
UPLOADTHING_APP_ID=ssl0e3rt0n
```

### Usage in Components
```tsx
import { UploadButton } from '@uploadthing/react';
import type { OurFileRouter } from '@/app/api/uploadthing/core';

<UploadButton<OurFileRouter, "imageUploader">
  endpoint="imageUploader"
  onClientUploadComplete={(res) => {
    // res[0].url contains the uploaded file URL
  }}
  onUploadError={(error: Error) => {
    // Handle error
  }}
/>
```

---

## Implementation Status

### ✅ Completed
- Hero Carousel (Full CRUD with UploadThing)
- Categories (Full CRUD with UploadThing)
- About Section Content (Full CRUD with UploadThing)
- Statistics (Full CRUD with isActive toggle)
- User Authentication
- Frontend Hero Section (Database Integration)

### 🔄 In Progress
- Admin route protection middleware

### ⏳ Pending
- Projects API & Integration
- Services API & Integration
- Team Members API & Integration
- Visual Showcase API
- Why Choose Us API
- CTA Section API

---

## Next Steps

1. Create API routes for remaining models (following Hero Carousel pattern)
2. Integrate admin pages with database
3. Add middleware for admin authentication
4. Implement search and filtering
5. Add pagination for large datasets
6. Create confirmation modals for delete actions
