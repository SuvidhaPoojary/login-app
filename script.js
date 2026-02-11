document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    
    // Handle form submission
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const gender = document.getElementById('gender').value;
        const course = document.getElementById('course').value;
        const userLocation = document.getElementById('location').value;
        
        // Get selected skills
        const skillsCheckboxes = document.querySelectorAll('input[name="skills"]:checked');
        const skills = Array.from(skillsCheckboxes).map(cb => cb.value);
        
        // Simple validation
        if(username.trim() === '') {
            alert('Please enter your username');
            return;
        }
        
        if(email.trim() === '' || !isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        if(password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }
        
        if(gender === '') {
            alert('Please select your gender');
            return;
        }
        
        if(skills.length === 0) {
            alert('Please select at least one skill');
            return;
        }
        
        if(course === '') {
            alert('Please select a course');
            return;
        }
        
        if(userLocation === '') {
            alert('Please select a location');
            return;
        }
        
        // Simulate registration process
        console.log('Registration data:', { 
            username, 
            email, 
            password, 
            gender, 
            skills, 
            course, 
            location: userLocation
        });
        
        // Show loading state
        const submitBtn = document.querySelector('.login-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Submitting...';
        submitBtn.disabled = true;
        
        // Simulate API call delay
        setTimeout(() => {
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Show success message
            alert(`Registration successful! Welcome, ${username}. You have registered for ${getCourseName(course)} in ${getLocationName(userLocation)}.`);
            
            // Here you would typically redirect to another page or store session data
            // window.location.href = '/dashboard'; // Example redirect
        }, 1500);
    });
    
    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Function to get course name for display
    function getCourseName(courseValue) {
        const courses = {
            'web-development': 'Web Development',
            'software-development': 'Software Development',
            'data-science': 'Data Science'
        };
        return courses[courseValue] || courseValue;
    }
    
    // Function to get location name for display
    function getLocationName(locationValue) {
        const locations = {
            'navi-mumbai': 'Navi Mumbai',
            'mumbai': 'Mumbai'
        };
        return locations[locationValue] || locationValue;
    }
    
    // Add focus effects to inputs
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
});