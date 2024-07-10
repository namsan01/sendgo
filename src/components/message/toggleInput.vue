<template>
    <fieldset class="flex flex-col gap-2 border-none">
      <label class="inline-flex items-center gap-2 cursor-pointer">
        <input role="switch" type="checkbox" class="toggle-input" />
      </label>
    </fieldset>
  </template>
  
  <script>
  export default {
    name: "ToggleInput"
  };
  </script>
  
  <style scoped>
  .toggle-input {
    cursor: pointer;
    appearance: none;
    position: relative;
    border: 2px solid gray;
    border-radius: 9999px;
    width: 5rem;
    height: 2.5rem;
    transition: background-color 250ms linear;
  }
  
  .toggle-input::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0.125rem;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    background-color: gray;
    transform: translate(0, -50%);
    transition: left 250ms linear, background-color 250ms linear;
  }
  
  .toggle-input:checked {
    background-color: #5E2BFF;
  }
  
  .toggle-input:checked::before {
    left: calc(100% - 1.9rem);
    background-color: white;
  }
  
  .toggle-input:focus-visible {
    outline-offset: 2px;
    outline: 2px solid #5E2BFF;
  }
  
  .toggle-input:enabled:hover {
    box-shadow: 0 0 0 4px lightgray;
  }
  
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  @media (max-width: 1024px) {

    .toggle-input {
    appearance: none;
    position: relative;
    border: 2px solid gray;
    border-radius: 9999px;
    width: 3rem;
    height: 1.5rem;
    transition: background-color 250ms linear;
  }

  .toggle-input::before {
    width: 1rem;
    height: 1rem;
  }

  .toggle-input:checked::before {
    left: calc(100% - 1.1rem);
    background-color: white;
  }


  }


  </style>
  