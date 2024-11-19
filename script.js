function checkStrength() {
  const password = document.getElementById('password').value;
  const strengthBar = document.getElementById('strength-bar');
  const description = document.getElementById('strength-description');
  let strength = 0;
  
  // Check password length
  if (password.length >= 12) strength += 1;
  if (password.match(/[a-z]/)) strength += 1;
  if (password.match(/[A-Z]/)) strength += 1;
  if (password.match(/\d/)) strength += 1;
  if (password.match(/[@$!%*?&]/)) strength += 1;

  // Update the strength meter
  switch (strength) {
    case 0:
      strengthBar.style.width = '0%';
      description.textContent = 'Very Weak: Password is too short or too simple.';
      description.style.color = 'red';
      break;
    case 1:
    case 2:
      strengthBar.style.width = '40%';
      description.textContent = 'Weak: Needs more complexity.';
      description.style.color = 'orange';
      break;
    case 3:
      strengthBar.style.width = '60%';
      description.textContent = 'Moderate: Fairly decent, but could be stronger.';
      description.style.color = 'yellow';
      break;
    case 4:
      strengthBar.style.width = '80%';
      description.textContent = 'Strong: Meets most best practices.';
      description.style.color = 'green';
      break;
    case 5:
      strengthBar.style.width = '100%';
      description.textContent = 'Very Strong: Excellent password!';
      description.style.color = 'green';
      break;
    default:
      strengthBar.style.width = '0%';
      description.textContent = '';
  }
}
