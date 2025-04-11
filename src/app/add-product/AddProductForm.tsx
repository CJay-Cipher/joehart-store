"use client";

import React, { useEffect, useState } from "react";
import { API_URLS } from "@/config/apiConfig";

const AddProductForm = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [brandName, setBrandName] = useState<string>("");
  const [currentPrice, setCurrentPrice] = useState<number | "">("");
  const [previousPrice, setPreviousPrice] = useState<number | "">("");
  const [discount, setDiscount] = useState<number | "">("");
  const [categories, setCategories] = useState<string[]>([]);
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [additionalImages, setAdditionalImages] = useState<File[]>([]);
  const [volume, setVolume] = useState<number | "">("");
  const [volumeUnit, setVolumeUnit] = useState<string>("ml");
  const [quantityInStock, setQuantityInStock] = useState<number | "">("");
  const [isFeatured, setIsFeatured] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    // Access token retrieval in useEffect to ensure it's on the client
    const token = window.localStorage.getItem("accessToken");
    setAccessToken(token);
  }, []);

  const refreshToken = async () => {
    try {
      const response = await fetch(`${API_URLS.refreshToken}`, {
        method: "POST",
        credentials: "include", // Include cookies
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to refresh token");
      }

      const data = await response.json();
      console.log("refreshToken data:", data);
      window.localStorage.setItem("accessToken", data.data.accessToken);
      setAccessToken(data.data.accessToken); // Update state with new token
      console.log("Token refreshed successfully");
      return data.data.accessToken;
    } catch (error) {
      console.error("Token refresh failed:", error);
      return null;
      // Redirect to login if token refresh fails
      // window.location.href = "/login";
    }
  };

  const handleSubmit = async (e: React.FormEvent, retryWithToken = null) => {
    e.preventDefault();
    setError("");
    setMessage("");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("brandName", brandName);
    formData.append("currentPrice", currentPrice.toString());
    if (previousPrice) formData.append("previousPrice", previousPrice.toString());
    if (discount) formData.append("discount", discount.toString());
    if (categories.length > 0) formData.append("categories", JSON.stringify(categories));
    if (thumbnail) formData.append("thumbnail", thumbnail);
    additionalImages.forEach((file) => formData.append("additionalImages", file));
    if (volume) formData.append("volume", volume.toString());
    formData.append("volumeUnit", volumeUnit);
    if (quantityInStock) formData.append("quantityInStock", quantityInStock.toString());
    formData.append("isFeatured", JSON.stringify(isFeatured));

    // Use provided token or the one from state
    const tokenToUse = retryWithToken || accessToken;

    try {
      const response = await fetch(API_URLS.addProduct, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${tokenToUse}`,
        },
        credentials: "include",
        body: formData,
      });

      if (!response.ok) {
        if (response.status === 401) {
          const data = await response.json();
          if (data.error?.details?.accessTokenStatus === "expired" && !retryWithToken) {
            const newRefreshToken = await refreshToken();
            // Only retry once to prevent infinite loops
            // const newToken = await refreshToken();
            if (newRefreshToken) {
              return handleSubmit(e, newRefreshToken); // Retry with new token
            }
          }
        }
        throw new Error(`HTTP error! Status: ${response}`);
      }

      const data = await response.json();
      if (data.success) {
        setMessage("Product added successfully!");
        // Reset form
        setTitle("");
        setDescription("");
        setBrandName("");
        setCurrentPrice("");
        setPreviousPrice("");
        setDiscount("");
        setCategories([]);
        setThumbnail(null);
        setAdditionalImages([]);
        setVolume("");
        setVolumeUnit("ml");
        setQuantityInStock("");
        setIsFeatured(false);
      } else {
        throw new Error(data.message);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error occurred");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl text-center font-semibold mb-4">Add Product</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[500px] mx-auto lg:p-6 p-4 shadow-lg border border-custom-slate-400 lg:rounded-[20px] rounded-[10px] space-y-4"
      >
        <div>
          <label className="lg:text-[16px] sm:text-[14px] text-[12px] ">
            Title: <span className="text-custom-red text-sm">*</span>
          </label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required className="border border-custom-slate-400 rounded w-full p-2" />
        </div>
        <div>
          <label className="lg:text-[16px] sm:text-[14px] text-[12px] ">
            Description: <span className="text-custom-red text-sm">*</span>
          </label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required className="border border-custom-slate-400 rounded w-full p-2" />
        </div>
        <div>
          <label className="lg:text-[16px] sm:text-[14px] text-[12px] ">
            Brand Name: <span className="text-custom-red text-sm">*</span>
          </label>
          <input type="text" value={brandName} onChange={(e) => setBrandName(e.target.value)} required className="border border-custom-slate-400 rounded w-full p-2" />
        </div>
        <div>
          <label className="lg:text-[16px] sm:text-[14px] text-[12px] ">
            Current Price: <span className="text-custom-red text-sm">*</span>
          </label>
          <input
            type="number"
            value={currentPrice}
            onChange={(e) => setCurrentPrice(Number(e.target.value))}
            required
            className="border border-custom-slate-400 rounded w-full p-2"
          />
        </div>
        <div>
          <label className="lg:text-[16px] sm:text-[14px] text-[12px] ">Previous Price:</label>
          <input
            type="number"
            value={previousPrice}
            onChange={(e) => {
              setPreviousPrice(Number(e.target.value));
              if (e.target.value) {
                setDiscount(""); // Reset discount if previousPrice is set
              }
            }}
            className="border border-custom-slate-400 rounded w-full p-2"
          />
        </div>
        <div>
          <label className="lg:text-[16px] sm:text-[14px] text-[12px] ">Discount:</label>
          <input
            type="number"
            value={discount}
            onChange={(e) => {
              setDiscount(Number(e.target.value));
              if (e.target.value) {
                setPreviousPrice(""); // Reset previousPrice if discount is set
              }
            }}
            className="border border-custom-slate-400 rounded w-full p-2"
          />
        </div>
        <div>
          <label className="lg:text-[16px] sm:text-[14px] text-[12px] ">Categories (comma separated):</label>
          <input
            type="text"
            value={categories.join(", ")}
            onChange={(e) => setCategories(e.target.value.split(",").map((cat) => cat.trim()))}
            className="border border-custom-slate-400 rounded w-full p-2"
          />
        </div>
        <div>
          <label className="lg:text-[16px] sm:text-[14px] text-[12px] ">
            Thumbnail/Image: <span className="text-custom-red text-sm">*</span>
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files) {
                setThumbnail(e.target.files[0]);
              }
            }}
            required
            className="border border-custom-slate-400 rounded w-full p-2"
          />
        </div>
        <div>
          <label className="lg:text-[16px] sm:text-[14px] text-[12px] ">Additional Images (max 5):</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => {
              if (e.target.files) {
                const filesArray = Array.from(e.target.files).slice(0, 5); // Limit to 5 files
                setAdditionalImages(filesArray);
              }
            }}
            className="border border-custom-slate-400 rounded w-full p-2"
          />
        </div>
        <div>
          <label className="lg:text-[16px] sm:text-[14px] text-[12px] ">Volume:</label>
          <input type="number" value={volume} onChange={(e) => setVolume(Number(e.target.value))} className="border border-custom-slate-400 rounded w-full p-2" />
        </div>
        <div>
          <label className="lg:text-[16px] sm:text-[14px] text-[12px] ">Volume Unit:</label>
          <select value={volumeUnit} onChange={(e) => setVolumeUnit(e.target.value)} className="border border-custom-slate-400 rounded w-full p-2">
            <option value="ml">ml</option>
            <option value="floz">floz</option>
            <option value="g">g</option>
            <option value="kg">kg</option>
            <option value="L">L</option>
          </select>
        </div>
        <div>
          <label className="lg:text-[16px] sm:text-[14px] text-[12px] ">Quantity in Stock:</label>
          <input
            type="number"
            value={quantityInStock}
            onChange={(e) => setQuantityInStock(Number(e.target.value))}
            className="border border-custom-slate-400 rounded w-full p-2"
          />
        </div>
        <div className="flex gap-4">
          <label className="lg:text-[16px] sm:text-[14px] text-[12px] ">Is Featured:</label>
          <input type="checkbox" checked={isFeatured} onChange={(e) => setIsFeatured(e.target.checked)} className="mr-2" />
        </div>
        {message && <p className="text-center text-green-500">{message}</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        <button type="submit" className="bg-blue-500 text-white rounded p-2">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
