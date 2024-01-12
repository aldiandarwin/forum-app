# Laravel Forum Music App

## Introduction

Welcome to the Laravel Forum Music App, a community-driven platform for sharing and discussing your favorite music. This application allows users to create threads, explore different music categories, search for specific topics, share music, and manage their activities through personalized dashboards.

![mockup-0](https://github.com/aldiandarwin/forum-app/assets/70283015/ca0a4718-149e-4651-9237-dd5cb1bb1e69)

## Features

### 1. Thread Sharing

-   Create and share threads to discuss your favorite music.
-   Share recommendations, album reviews, or engage in general music discussions.

### 2. Categories

-   Threads are organized into categories for easy navigation.
-   Explore discussions based on music genres, artists, or specific topics.

### 3. Search

-   Utilize the search functionality to find threads or topics quickly.
-   Enhance your experience by locating relevant content with ease.

### 4. Music Sharing

-   Share music within threads using embeds, links, or other supported methods.
-   Discover and introduce others to new music.

### 5. Dashboard

-   Personalized dashboards for managing forum activities.
-   Track threads, replies, and engagements seamlessly.

![forum](https://github.com/aldiandarwin/forum-app/assets/70283015/fd201cfc-ba8e-4789-b072-d3988c313bb5)

## Installation

Follow these steps to set up the Laravel Forum Music App:

### **Clone the repository:**

```bash
git clone <https://github.com/aldiandarwin/forum-app.git>
```

Install dependencies:

bash

```Copy code
composer install
```

Configure environment variables:

Duplicate .env.example to .env.

Update database connection settings and other configurations.

Generate application key:

bash

```Copy code
php artisan key:generate
```

Run migrations and seed the database:

bash

```Copy code
php artisan migrate --seed
```

Start the development server:

bash

```Copy code
php artisan serve
```

Visit the application in your browser at <http://localhost:8000> or the specified port.
