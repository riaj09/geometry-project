function calculateTriangleArea() {
    const triangleBaseInputField = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInputField.value;
    const base = parseFloat(triangleBaseText);
    console.log(base)

    const triangleHeightInputField = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInputField.value;
    const height = parseFloat(triangleHeightText);
    console.log(height)

    const area = 0.5 * base * height;
    console.log('area of the triangle is', area);
    // display triangle area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}
