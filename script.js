
        const form = document.getElementById('reviewForm');
        const reviewsContainer = document.getElementById('reviewsContainer');

        form.addEventListener('submit', function(e) {
            e.preventDefault(); 

            const name = document.getElementById('name').value;
            const ratingValue = document.getElementById('rating').value;
            const comment = document.getElementById('comment').value;
            
            let stars = '';
            for(let i=0; i<5; i++) {
                if(i < ratingValue) stars += '★';
                else stars += '☆';
            }

            const date = new Date().toLocaleDateString('en-US', {
                year: 'numeric', month: 'short', day: 'numeric'
            });

            const newCard = document.createElement('div');
            newCard.classList.add('review-card');
            newCard.innerHTML = `
                <div class="review-header">
                    <span class="reviewer-name">${name}</span>
                    <span class="stars">${stars}</span>
                </div>
                <span class="review-date">${date}</span>
                <p class="review-text">"${comment}"</p>
            `;

            newCard.style.opacity = '0';
            newCard.style.transform = 'translateY(20px)';
            reviewsContainer.prepend(newCard);
            
            setTimeout(() => {
                newCard.style.transition = 'all 0.5s ease-out';
                newCard.style.opacity = '1';
                newCard.style.transform = 'translateY(0)';
            }, 10);

            form.reset();
        });
