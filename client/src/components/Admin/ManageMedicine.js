import React, { useState } from "react";
import {
  useGetMedicinesQuery,
  useCreateMedicineMutation,
  useUpdateMedicineMutation,
  useDeleteMedicineMutation,
} from "../../Redux/Medicine/api";

const ManageMedicine = () => {
  const { data: medicines, error, isLoading } = useGetMedicinesQuery();
  const [createMedicine] = useCreateMedicineMutation();
  const [updateMedicine] = useUpdateMedicineMutation();
  const [deleteMedicine] = useDeleteMedicineMutation();

  const [formData, setFormData] = useState({ name: "", price: "", stock: "" });
  const [editingMedicine, setEditingMedicine] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingMedicine) {
        await updateMedicine({ ...formData, medicineId: editingMedicine._id });
      } else {
        await createMedicine(formData);
      }
      setFormData({ name: "", price: "", stock: "" });
      setEditingMedicine(null);
    } catch (error) {
      console.error("Lỗi khi tạo hoặc cập nhật thuốc:", error);
    }
  };

  const handleEdit = (medicine) => {
    setFormData(medicine);
    setEditingMedicine(medicine);
  };

  const handleDelete = async (medicineId) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa thuốc này?")) {
      try {
        await deleteMedicine(medicineId);
      } catch (error) {
        console.error("Lỗi khi xóa thuốc:", error);
      }
    }
  };

  if (isLoading) return <p>Đang tải...</p>;
  if (error) return <p>Lỗi khi tải danh sách thuốc: {error.message}</p>;

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Quản lý thuốc</h1>

      {/* Form tạo hoặc cập nhật thuốc */}
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Tên thuốc"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="number"
          name="price"
          placeholder="Giá"
          value={formData.price}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="number"
          name="stock"
          placeholder="Số lượng tồn kho"
          value={formData.stock}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.submitButton}>
          {editingMedicine ? "Cập nhật thuốc" : "Tạo thuốc mới"}
        </button>
      </form>

      {/* Bảng danh sách thuốc */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Tên thuốc</th>
            <th style={styles.tableHeader}>Giá</th>
            <th style={styles.tableHeader}>Số lượng tồn kho</th>
            <th style={styles.tableHeader}>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {medicines?.data.map((medicine) => (
            <tr key={medicine._id} style={styles.tableRow}>
              <td style={styles.tableCell}>{medicine.name}</td>
              <td style={styles.tableCell}>{medicine.price}</td>
              <td style={styles.tableCell}>{medicine.stock}</td>
              <td style={styles.tableCell}>
                <button
                  onClick={() => handleEdit(medicine)}
                  style={styles.editButton}
                >
                  Chỉnh sửa
                </button>
                <button
                  onClick={() => handleDelete(medicine._id)}
                  style={styles.deleteButton}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageMedicine;

// CSS inline styles
const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    flex: "1 1 calc(33% - 20px)",
  },
  submitButton: {
    padding: "10px 15px",
    backgroundColor: "#e53935",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    flex: "1 1 100%",
    transition: "background-color 0.3s ease",
    marginTop: "10px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    borderRadius: "5px",
    overflow: "hidden",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  tableHeader: {
    backgroundColor: "#e53935",
    color: "#fff",
    padding: "12px",
    textAlign: "left",
  },
  tableRow: {
    transition: "background-color 0.3s ease",
  },
  tableCell: {
    padding: "12px",
    borderBottom: "1px solid #ddd",
  },
  editButton: {
    padding: "8px 12px",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    marginRight: "8px",
    transition: "background-color 0.3s ease",
  },
  deleteButton: {
    padding: "8px 12px",
    backgroundColor: "#e53935",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
};
