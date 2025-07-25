#!/bin/bash

# Lanka Trails Image Organization Script
# This script helps organize images into the new directory structure

echo "🖼️  Lanka Trails Image Organization Helper"
echo "=========================================="

# Create placeholder images for testing (optional)
create_placeholders() {
    echo "📦 Creating placeholder images for testing..."
    
    # Trails
    for trail in sigiriya mirissa adams-peak yala kandy-temple ella-rock; do
        mkdir -p "public/assets/images/trails/$trail"
        for img in main gallery-1 gallery-2 gallery-3; do
            if [ ! -f "public/assets/images/trails/$trail/$img.jpg" ]; then
                echo "Creating placeholder: trails/$trail/$img.jpg"
                # In a real script, you could copy a default placeholder here
                # cp "public/placeholder.svg" "public/assets/images/trails/$trail/$img.jpg"
            fi
        done
    done
    
    # Stories  
    for story in sigiriya-journey mirissa-whales adams-peak-sunrise; do
        mkdir -p "public/assets/images/stories/$story"
        for img in featured moment-1 moment-2 moment-3; do
            if [ ! -f "public/assets/images/stories/$story/$img.jpg" ]; then
                echo "Creating placeholder: stories/$story/$img.jpg"
                # cp "public/placeholder.svg" "public/assets/images/stories/$story/$img.jpg"
            fi
        done
    done
}

# Check current image status
check_images() {
    echo "🔍 Checking current image organization..."
    
    echo -e "\n📁 Trail Images Status:"
    for trail in sigiriya mirissa adams-peak yala kandy-temple ella-rock; do
        echo "  $trail:"
        for img in main gallery-1 gallery-2 gallery-3; do
            if [ -f "public/assets/images/trails/$trail/$img.jpg" ]; then
                echo "    ✅ $img.jpg"
            else
                echo "    ❌ $img.jpg (missing)"
            fi
        done
    done
    
    echo -e "\n📖 Story Images Status:"
    for story in sigiriya-journey mirissa-whales adams-peak-sunrise; do
        echo "  $story:"
        for img in featured moment-1 moment-2 moment-3; do
            if [ -f "public/assets/images/stories/$story/$img.jpg" ]; then
                echo "    ✅ $img.jpg"
            else
                echo "    ❌ $img.jpg (missing)"
            fi
        done
    done
}

# Display help
show_help() {
    echo "Usage: ./organize_images.sh [command]"
    echo ""
    echo "Commands:"
    echo "  check       - Check current image organization status"
    echo "  create      - Create placeholder structure"
    echo "  help        - Show this help message"
    echo ""
    echo "Manual Steps:"
    echo "1. Add your high-quality images to the appropriate directories"
    echo "2. Follow naming conventions: main.jpg, gallery-1.jpg, etc."
    echo "3. Optimize images for web (max 500KB each)"
    echo "4. Test the website to ensure images load correctly"
}

# Main script logic
case "$1" in
    "check")
        check_images
        ;;
    "create")
        create_placeholders
        ;;
    "help"|"--help"|"-h")
        show_help
        ;;
    *)
        echo "🚀 Lanka Trails image structure is ready!"
        echo "   Run './organize_images.sh help' for available commands"
        echo "   See MIGRATION_GUIDE.md for detailed instructions"
        ;;
esac
