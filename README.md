<h2>Motivation</h2>
Play with dark mode in next.js with MUI ui. Allow to toggle the mode via icon

<h2>file changes due to dark mode</h2>
<table>
  <tr>
    <th>File name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>_app.tsx</td>
    <td>use ThemeProvider from next-themes and PageProviderWithMui</td>
  </tr>
  <tr>
    <td>index.tsx</td>
    <td>use useTheme from next-themes to show the mode</td>
  </tr>
  <tr>
    <td>page-provider-with-mui.tsx</td>
    <td>implement PageProviderWithMui inckuding mode toggle</td>
  </tr>
  <tr>
    <td>themes.ts</td>
    <td>implement define palette of light and dark mode for mui</td>
  </tr>
</table>


<h2>Points of interest</h2>
<ul>
<li>There are two ThemeProvider </li>
<ul>
<li>one is imported from @mui/material and handle mui theme</li>
<li>the other is imported from next-themes and handle persistance</li>
</ul>
</ul>


<h2>Setup</h2>

<h3>Install</h3>

```
npm i
```

<h3>Run</h3>

```
npm run dec
```