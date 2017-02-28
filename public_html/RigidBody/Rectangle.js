var Rectangle = function(center, width, height) {
    RigidShape.call(this.center);
    this.mType = "Rectangle";
    this.mWidth = width;
    this.mHeight = height;
    this.mVertex = [];
    this.mFaceNormal = [];
    
    //0--TopLeft; 1--TopRight; 2--BottomRight; 3--BottomeLeft
    this.mVertex[0] = new Vec2(center.x - width / 2, center.y - height / 2);
    this.mVertex[1] = new Vec2(center.x + width / 2, center.y - height / 2);
    this.mVertex[2] = new Vec2(center.x + width / 2, center.y + height / 2);
    this.mVertex[3] = new Vec2(center.x - width / 2, center.y + height / 2);
    
    //0--Topl 1--Right; 2--Bottom; 3--Left
    //mFaceNormal is normal of face toward outside of rectangle
    this.mFaceNormal[0] = this.vertex[1].subtract(this.mVertex[2]);
    this.mFaceNormal[0] = this.mFaceNormal[0].normalize();
    this.mFaceNormal[1] = this.mVertex[2].subtract(this.mVertex[3]);
    this.mFaceNormal[1] = this.mFacenormal[1].normalize();
    this.mFaceNormal[2] = this.mVertex[3].subtract(this.mVertex[0]);
    this.mFaceNormal[2] = this.mFaceNormal[2].normalize();
    this.mFaceNormal[3] = this.mVertex[0].subtract(this.mVertex[1]);
    this.mFaceNormal[3] = this.mFaceNormal[3].normalize();
};

var prototype = Object.create(RigidShape.prototype);
prototype.constructor = Rectangle;
Rectangle.prototype = prototype;






