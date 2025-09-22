
        // Sample recipe data
        const recipes = [
            {
                id: 1,
                title: "Classic Pancakes",
                description: "Fluffy, golden pancakes perfect for a weekend breakfast.",
                image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                category: "breakfast",
                prepTime: 10,
                cookTime: 15,
                servings: 4,
                ingredients: [
                    { name: "All-purpose flour", quantity: 1.5, unit: "cups" },
                    { name: "Baking powder", quantity: 3.5, unit: "tsp" },
                    { name: "Salt", quantity: 1, unit: "tsp" },
                    { name: "White sugar", quantity: 1, unit: "tbsp" },
                    { name: "Milk", quantity: 1.25, unit: "cups" },
                    { name: "Egg", quantity: 1, unit: "" },
                    { name: "Butter, melted", quantity: 3, unit: "tbsp" }
                ],
                instructions: [
                    "In a large bowl, mix together the flour, baking powder, salt and sugar.",
                    "Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.",
                    "Heat a lightly oiled griddle or frying pan over medium-high heat.",
                    "Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.",
                    "Brown on both sides and serve hot with your favorite toppings."
                ],
                isFavorite: false
            },
            {
                id: 2,
                title: "Chicken Caesar Salad",
                description: "A fresh and satisfying salad with grilled chicken and creamy Caesar dressing.",
                image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                category: "lunch",
                prepTime: 20,
                cookTime: 15,
                servings: 2,
                ingredients: [
                    { name: "Romaine lettuce, chopped", quantity: 1, unit: "head" },
                    { name: "Chicken breast, grilled", quantity: 2, unit: "" },
                    { name: "Parmesan cheese, shredded", quantity: 0.5, unit: "cup" },
                    { name: "Croutons", quantity: 1, unit: "cup" },
                    { name: "Caesar dressing", quantity: 0.25, unit: "cup" },
                    { name: "Lemon juice", quantity: 1, unit: "tbsp" },
                    { name: "Black pepper", quantity: 0.5, unit: "tsp" }
                ],
                instructions: [
                    "Grill the chicken breasts until fully cooked, then slice into strips.",
                    "Wash and chop the romaine lettuce, then place in a large bowl.",
                    "Add the sliced chicken, parmesan cheese, and croutons to the bowl.",
                    "Drizzle with Caesar dressing and lemon juice, then toss to combine.",
                    "Season with black pepper and serve immediately."
                ],
                isFavorite: false
            },
            {
                id: 3,
                title: "Spaghetti Carbonara",
                description: "Creamy Italian pasta dish with eggs, cheese, and pancetta.",
                image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                category: "dinner",
                prepTime: 10,
                cookTime: 20,
                servings: 4,
                ingredients: [
                    { name: "Spaghetti", quantity: 1, unit: "lb" },
                    { name: "Pancetta, diced", quantity: 8, unit: "oz" },
                    { name: "Eggs", quantity: 4, unit: "" },
                    { name: "Parmesan cheese, grated", quantity: 1, unit: "cup" },
                    { name: "Black pepper", quantity: 1, unit: "tsp" },
                    { name: "Salt", quantity: 1, unit: "tsp" },
                    { name: "Garlic cloves, minced", quantity: 2, unit: "" }
                ],
                instructions: [
                    "Cook spaghetti according to package directions until al dente.",
                    "While pasta cooks, sauté pancetta in a large skillet until crispy.",
                    "In a bowl, whisk together eggs, parmesan cheese, and black pepper.",
                    "Drain pasta, reserving 1 cup of pasta water.",
                    "Quickly toss hot pasta with pancetta, then remove from heat.",
                    "Stir in egg mixture, adding pasta water gradually until creamy.",
                    "Serve immediately with extra parmesan and black pepper."
                ],
                isFavorite: false
            },
            {
                id: 4,
                title: "Chocolate Chip Cookies",
                description: "Classic cookies with melty chocolate chips and a soft center.",
                image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
                category: "dessert",
                prepTime: 15,
                cookTime: 10,
                servings: 24,
                ingredients: [
                    { name: "All-purpose flour", quantity: 2.25, unit: "cups" },
                    { name: "Baking soda", quantity: 1, unit: "tsp" },
                    { name: "Salt", quantity: 1, unit: "tsp" },
                    { name: "Butter, softened", quantity: 1, unit: "cup" },
                    { name: "Brown sugar", quantity: 0.75, unit: "cup" },
                    { name: "White sugar", quantity: 0.75, unit: "cup" },
                    { name: "Vanilla extract", quantity: 2, unit: "tsp" },
                    { name: "Eggs", quantity: 2, unit: "" },
                    { name: "Chocolate chips", quantity: 2, unit: "cups" }
                ],
                instructions: [
                    "Preheat oven to 375°F (190°C).",
                    "In a small bowl, mix flour, baking soda, and salt.",
                    "In a large bowl, cream together butter and sugars until smooth.",
                    "Beat in eggs one at a time, then stir in vanilla.",
                    "Gradually blend in flour mixture, then stir in chocolate chips.",
                    "Drop rounded tablespoons of dough onto ungreased cookie sheets.",
                    "Bake for 9-11 minutes or until golden brown.",
                    "Cool on baking sheet for 2 minutes before transferring to wire rack."
                ],
                isFavorite: false
            }
        ];

        // DOM Elements
        const recipeGrid = document.getElementById('recipeGrid');
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');
        const categoryBtns = document.querySelectorAll('.category-btn');
        const themeToggle = document.getElementById('themeToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        const navLinks = document.querySelector('.nav-links');
        const homePage = document.getElementById('home-page');
        const recipeDetailPage = document.getElementById('recipe-detail-page');
        const backBtn = document.getElementById('backBtn');
        const recipeImageLarge = document.getElementById('recipeImageLarge');
        const recipeTitleLarge = document.getElementById('recipeTitleLarge');
        const recipeDescriptionLarge = document.getElementById('recipeDescriptionLarge');
        const prepTime = document.getElementById('prepTime');
        const cookTime = document.getElementById('cookTime');
        const totalTime = document.getElementById('totalTime');
        const servings = document.getElementById('servings');
        const servingValue = document.getElementById('servingValue');
        const decreaseServing = document.getElementById('decreaseServing');
        const increaseServing = document.getElementById('increaseServing');
        const ingredientsList = document.getElementById('ingredientsList');
        const instructionsList = document.getElementById('instructionsList');
        const detailFavoriteBtn = document.getElementById('detailFavoriteBtn');
        const stepModeBtn = document.getElementById('stepModeBtn');
        const stepNav = document.getElementById('stepNav');
        const prevStep = document.getElementById('prevStep');
        const nextStep = document.getElementById('nextStep');
        const stepIndicator = document.getElementById('stepIndicator');

        // State variables
        let currentRecipes = [...recipes];
        let currentCategory = 'all';
        let currentSearchTerm = '';
        let currentRecipe = null;
        let currentServings = 4;
        let stepMode = false;
        let currentStep = 0;

        // Initialize the app
        function init() {
            renderRecipes();
            setupEventListeners();
            loadFavorites();
        }

        // Set up event listeners
        function setupEventListeners() {
            // Search functionality
            searchBtn.addEventListener('click', handleSearch);
            searchInput.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') handleSearch();
            });

            // Category filters
            categoryBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    categoryBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    currentCategory = btn.dataset.category;
                    filterRecipes();
                });
            });

            // Theme toggle
            themeToggle.addEventListener('click', toggleTheme);

            // Mobile menu
            mobileMenu.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });

            // Navigation
            backBtn.addEventListener('click', showHomePage);
            
            // Serving controls
            decreaseServing.addEventListener('click', () => adjustServings(-1));
            increaseServing.addEventListener('click', () => adjustServings(1));
            
            // Step-by-step mode
            stepModeBtn.addEventListener('click', toggleStepMode);
            prevStep.addEventListener('click', () => navigateSteps(-1));
            nextStep.addEventListener('click', () => navigateSteps(1));
            
            // Favorite button
            detailFavoriteBtn.addEventListener('click', toggleFavorite);
        }

        // Render recipe cards
        function renderRecipes() {
            recipeGrid.innerHTML = '';
            
            currentRecipes.forEach(recipe => {
                const card = document.createElement('div');
                card.className = 'recipe-card';
                card.innerHTML = `
                    <img src="${recipe.image}" alt="${recipe.title}" class="recipe-img">
                    <div class="recipe-content">
                        <h3 class="recipe-title">${recipe.title}</h3>
                        <p class="recipe-description">${recipe.description}</p>
                        <div class="recipe-meta">
                            <span>${recipe.prepTime + recipe.cookTime} mins • ${recipe.servings} servings</span>
                            <button class="favorite-btn ${recipe.isFavorite ? 'active' : ''}" data-id="${recipe.id}">${recipe.isFavorite ? '♥' : '♡'}</button>
                        </div>
                    </div>
                `;
                
                card.addEventListener('click', () => showRecipeDetail(recipe.id));
                
                const favoriteBtn = card.querySelector('.favorite-btn');
                favoriteBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    toggleFavorite(recipe.id);
                });
                
                recipeGrid.appendChild(card);
            });
        }

        // Handle search
        function handleSearch() {
            currentSearchTerm = searchInput.value.toLowerCase();
            filterRecipes();
        }

        // Filter recipes based on category and search term
        function filterRecipes() {
            currentRecipes = recipes.filter(recipe => {
                const matchesCategory = currentCategory === 'all' || recipe.category === currentCategory;
                const matchesSearch = currentSearchTerm === '' || 
                    recipe.title.toLowerCase().includes(currentSearchTerm) ||
                    recipe.ingredients.some(ing => ing.name.toLowerCase().includes(currentSearchTerm));
                
                return matchesCategory && matchesSearch;
            });
            
            renderRecipes();
        }

        // Show recipe detail page
        function showRecipeDetail(recipeId) {
            currentRecipe = recipes.find(r => r.id === recipeId);
            if (!currentRecipe) return;
            
            // Update recipe details
            recipeImageLarge.src = currentRecipe.image;
            recipeTitleLarge.textContent = currentRecipe.title;
            recipeDescriptionLarge.textContent = currentRecipe.description;
            prepTime.textContent = currentRecipe.prepTime;
            cookTime.textContent = currentRecipe.cookTime;
            totalTime.textContent = currentRecipe.prepTime + currentRecipe.cookTime;
            servings.textContent = currentRecipe.servings;
            currentServings = currentRecipe.servings;
            servingValue.textContent = currentServings;
            
            // Update favorite button
            detailFavoriteBtn.className = `favorite-btn ${currentRecipe.isFavorite ? 'active' : ''}`;
            detailFavoriteBtn.textContent = currentRecipe.isFavorite ? '♥' : '♡';
            
            // Render ingredients
            renderIngredients();
            
            // Render instructions
            renderInstructions();
            
            // Reset step mode
            stepMode = false;
            currentStep = 0;
            stepNav.style.display = 'none';
            stepModeBtn.textContent = 'Step-by-Step Mode';
            
            // Show detail page, hide home page
            homePage.classList.remove('active');
            recipeDetailPage.style.display = 'block';
        }

        // Render ingredients with scaling
        function renderIngredients() {
            ingredientsList.innerHTML = '';
            
            const scaleFactor = currentServings / currentRecipe.servings;
            
            currentRecipe.ingredients.forEach(ingredient => {
                const li = document.createElement('li');
                li.className = 'ingredient-item';
                
                const scaledQuantity = ingredient.quantity * scaleFactor;
                const quantityText = scaledQuantity % 1 === 0 ? scaledQuantity : scaledQuantity.toFixed(2);
                
                li.innerHTML = `
                    <span class="ingredient-name">${ingredient.name}</span>
                    <span class="ingredient-quantity">${quantityText} ${ingredient.unit}</span>
                `;
                
                ingredientsList.appendChild(li);
            });
        }

        // Render instructions
        function renderInstructions() {
            instructionsList.innerHTML = '';
            
            currentRecipe.instructions.forEach((instruction, index) => {
                const li = document.createElement('li');
                li.className = 'instruction-item';
                li.textContent = instruction;
                
                if (stepMode && index !== currentStep) {
                    li.style.display = 'none';
                }
                
                instructionsList.appendChild(li);
            });
            
            // Update step indicator
            updateStepIndicator();
        }

        // Show home page
        function showHomePage() {
            recipeDetailPage.style.display = 'none';
            homePage.classList.add('active');
        }

        // Adjust servings
        function adjustServings(change) {
            currentServings = Math.max(1, currentServings + change);
            servingValue.textContent = currentServings;
            renderIngredients();
        }

        // Toggle favorite status
        function toggleFavorite(recipeId) {
            // If called from detail page
            if (!recipeId && currentRecipe) {
                recipeId = currentRecipe.id;
            }
            
            const recipe = recipes.find(r => r.id === recipeId);
            if (!recipe) return;
            
            recipe.isFavorite = !recipe.isFavorite;
            
            // Update UI
            if (currentRecipe && currentRecipe.id === recipeId) {
                detailFavoriteBtn.className = `favorite-btn ${recipe.isFavorite ? 'active' : ''}`;
                detailFavoriteBtn.textContent = recipe.isFavorite ? '♥' : '♡';
            }
            
            // Update recipe cards
            const favoriteBtn = document.querySelector(`.favorite-btn[data-id="${recipeId}"]`);
            if (favoriteBtn) {
                favoriteBtn.className = `favorite-btn ${recipe.isFavorite ? 'active' : ''}`;
                favoriteBtn.textContent = recipe.isFavorite ? '♥' : '♡';
            }
            
            // Save to localStorage
            saveFavorites();
        }

        // Save favorites to localStorage
        function saveFavorites() {
            const favoriteIds = recipes.filter(r => r.isFavorite).map(r => r.id);
            localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteIds));
        }

        // Load favorites from localStorage
        function loadFavorites() {
            const favoriteIds = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
            
            recipes.forEach(recipe => {
                recipe.isFavorite = favoriteIds.includes(recipe.id);
            });
        }

        // Toggle step-by-step mode
        function toggleStepMode() {
            stepMode = !stepMode;
            
            if (stepMode) {
                stepModeBtn.textContent = 'Exit Step Mode';
                stepNav.style.display = 'flex';
                currentStep = 0;
                renderInstructions();
                updateStepButtons();
            } else {
                stepModeBtn.textContent = 'Step-by-Step Mode';
                stepNav.style.display = 'none';
                renderInstructions();
            }
        }

        // Navigate between steps
        function navigateSteps(direction) {
            currentStep += direction;
            renderInstructions();
            updateStepButtons();
        }

        // Update step navigation buttons
        function updateStepButtons() {
            prevStep.disabled = currentStep === 0;
            nextStep.disabled = currentStep === currentRecipe.instructions.length - 1;
        }

        // Update step indicator
        function updateStepIndicator() {
            stepIndicator.innerHTML = '';
            
            for (let i = 0; i < currentRecipe.instructions.length; i++) {
                const dot = document.createElement('div');
                dot.className = `step-dot ${i === currentStep ? 'active' : ''}`;
                stepIndicator.appendChild(dot);
            }
        }

        // Toggle dark/light theme
        function toggleTheme() {
            document.body.classList.toggle('dark-mode');
            themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
            
            // Save theme preference
            localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        }

        // Load saved theme preference
        function loadTheme() {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                document.body.classList.add('dark-mode');
                themeToggle.textContent = '☀️';
            }
        }

        // Initialize the app when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            init();
            loadTheme();
        });
    
