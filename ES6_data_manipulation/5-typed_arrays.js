export default function createInt8TypedArray(length, position, value) {
    // Step 1: Create a new ArrayBuffer with the specified length
    const buffer = new ArrayBuffer(length);
  
    // Step 2: Create a DataView for the ArrayBuffer
    const view = new DataView(buffer);
  
    // Step 3: Check if the position is within bounds
    if (position < 0 || position >= length) {
      throw new Error('Position outside range');
    }
  
    // Step 4: Set the value at the specified position
    view.setInt8(position, value);
  
    // Step 5: Return the DataView
    return view;
  }